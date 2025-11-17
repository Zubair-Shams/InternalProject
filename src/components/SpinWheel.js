import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";

// Move pure function outside component to avoid recreation
const easeOutCubic = (t) => {
  return 1 - Math.pow(1 - t, 3);
};

// Parse text once per segment
const parseSegmentText = (text) => {
  const cleanText = text.replace(/\s+/g, " ").trim();
  const percentageMatch = cleanText.match(/(\d+%\s*OFF?)/i);

  if (percentageMatch) {
    const percentageIndex = cleanText.indexOf(percentageMatch[0]);
    return {
      brandName: cleanText.substring(0, percentageIndex).trim(),
      discount: percentageMatch[0].trim(),
    };
  }

  const words = cleanText.split(" ").filter((word) => word.length > 0);
  if (words.length >= 2) {
    return {
      brandName: words[0],
      discount: words.slice(1).join(" "),
    };
  }

  return { brandName: cleanText, discount: "" };
};

export const CustomSpinWheel = ({
  data,
  mustStartSpinning,
  prizeNumber,
  onStopSpinning,
  size = 600,
}) => {
  const canvasRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const animationRef = useRef();

  // Memoize expensive calculations that depend on data.length and size
  const wheelConfig = useMemo(() => {
    return {
      segmentAngle: (2 * Math.PI) / data.length,
      centerX: size / 2,
      centerY: size / 2,
      radius: size * 0.45,
    };
  }, [data.length, size]);

  // Pre-parse segment text to avoid regex on every draw
  const parsedSegments = useMemo(() => {
    return data.map((segment) => ({
      ...segment,
      parsedText: parseSegmentText(segment.option),
    }));
  }, [data]);

  // Memoize drawWheel to prevent recreation on every render
  const drawWheel = useCallback(
    (currentRotation) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const { segmentAngle, centerX, centerY, radius } = wheelConfig;

      ctx.clearRect(0, 0, size, size);
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(currentRotation);

      // Draw segments using pre-parsed data
      parsedSegments.forEach((segment, index) => {
        const startAngle = index * segmentAngle - Math.PI / 2;
        const endAngle = startAngle + segmentAngle;

        // Draw segment
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.arc(0, 0, radius, startAngle, endAngle);
        ctx.closePath();
        ctx.fillStyle = segment.style.backgroundColor;
        ctx.fill();

        // Draw segment border
        ctx.strokeStyle = "#000";
        ctx.lineWidth = 3;
        ctx.stroke();

        // Draw text with improved layout (using pre-parsed text)
        ctx.save();
        ctx.rotate(startAngle + segmentAngle / 2);
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = segment.style.textColor;

        const textRadius = radius * 0.65;
        const { brandName, discount } = segment.parsedText;

        // Draw brand name (larger, bolder)
        if (brandName) {
          ctx.font = `bold ${Math.floor(
            (segment.style.fontSize || 18) * 1.3
          )}px Arial`;
          ctx.fillText(brandName.toUpperCase(), textRadius, -12);
        }

        // Draw discount (slightly smaller)
        if (discount) {
          ctx.font = `bold ${segment.style.fontSize || 18}px Arial`;
          ctx.fillText(discount.toUpperCase(), textRadius, 12);
        }

        ctx.restore();
      });

      // Draw outer border
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, 2 * Math.PI);
      ctx.strokeStyle = "#DF3B37";
      ctx.lineWidth = 20;
      ctx.stroke();

      ctx.restore();

      // Draw center circle
      ctx.beginPath();
      ctx.arc(centerX, centerY, size * 0.12, 0, 2 * Math.PI);
      ctx.fillStyle = "#353333";
      ctx.fill();
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 3;
      ctx.stroke();

      // Draw "SPIN" text in center
      ctx.save();
      ctx.fillStyle = "#FFFFFF";
      ctx.font = `bold ${size * 0.08}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("SPIN", centerX, centerY);
      ctx.restore();

      // Draw pointer at top (flipped to point inward with shadow and increased size)
      ctx.save();
      ctx.translate(centerX, centerY - radius);

      // Add shadow to pointer
      ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
      ctx.shadowBlur = 10;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 5;

      ctx.beginPath();
      // Increased size: from -30, -20, 20, 10 to -45, -30, 30, 15
      ctx.moveTo(0, 15); // Point facing inward (flipped)
      ctx.lineTo(-30, -45);
      ctx.lineTo(30, -45);
      ctx.closePath();
      ctx.fillStyle = "#DF3B37";
      ctx.fill();

      // Reset shadow for stroke
      ctx.shadowColor = "transparent";
      ctx.shadowBlur = 0;
      ctx.shadowOffsetX = 0;
      ctx.shadowOffsetY = 0;

      ctx.strokeStyle = "#000";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    },
    [wheelConfig, parsedSegments, size]
  );

  // Spin animation
  useEffect(() => {
    if (mustStartSpinning && !isSpinning) {
      setIsSpinning(true);

      const { segmentAngle } = wheelConfig;
      const currentRotationNormalized = rotation % (2 * Math.PI);
      const winningSegmentCenterAngle =
        prizeNumber * segmentAngle + segmentAngle / 2;
      const targetAngle = 2 * Math.PI - winningSegmentCenterAngle;
      let angleDifference = targetAngle - currentRotationNormalized;

      if (angleDifference < 0) {
        angleDifference += 2 * Math.PI;
      }

      const spins = 5;
      const totalRotationDistance = spins * 2 * Math.PI + angleDifference;
      const duration = 4000;
      const startTime = Date.now();
      const startRotation = rotation;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutCubic(progress);

        const newRotation =
          startRotation + totalRotationDistance * easedProgress;
        setRotation(newRotation);
        drawWheel(newRotation);

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animate);
        } else {
          setIsSpinning(false);
          onStopSpinning();
        }
      };

      animate();
    }
  }, [
    mustStartSpinning,
    prizeNumber,
    isSpinning,
    rotation,
    wheelConfig,
    drawWheel,
    onStopSpinning,
  ]);

  // Initial draw and redraw when dependencies change
  useEffect(() => {
    drawWheel(rotation);
  }, [drawWheel, rotation]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative inline-block"
      style={{ width: size, height: size }}
    >
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="drop-shadow-2xl"
      />
    </div>
  );
};
