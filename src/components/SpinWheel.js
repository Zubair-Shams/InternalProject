import React, { useRef, useEffect, useState } from "react";

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

  const segmentAngle = (2 * Math.PI) / data.length;
  const centerX = size / 2;
  const centerY = size / 2;
  const radius = size * 0.45;

  // Draw the wheel
  const drawWheel = (currentRotation) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, size, size);
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(currentRotation);

    // Draw segments
    data.forEach((segment, index) => {
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

      // Draw text with improved layout
      ctx.save();
      ctx.rotate(startAngle + segmentAngle / 2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = segment.style.textColor;

      const textRadius = radius * 0.65;
      const text = segment.option.replace(/\s+/g, " ").trim();

      // Parse brand name and discount
      const percentageMatch = text.match(/(\d+%\s*OFF?)/i);
      let brandName = "";
      let discount = "";

      if (percentageMatch) {
        const percentageIndex = text.indexOf(percentageMatch[0]);
        brandName = text.substring(0, percentageIndex).trim();
        discount = percentageMatch[0].trim();
      } else {
        const words = text.split(" ").filter((word) => word.length > 0);
        if (words.length >= 2) {
          brandName = words[0];
          discount = words.slice(1).join(" ");
        } else {
          brandName = text;
        }
      }

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

    // Draw inner border
    ctx.beginPath();
    ctx.arc(0, 0, radius - 20, 0, 2 * Math.PI);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 3;
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

    // Draw pointer at top
    ctx.save();
    ctx.translate(centerX, centerY - radius);
    ctx.beginPath();
    ctx.moveTo(0, -30);
    ctx.lineTo(-20, 10);
    ctx.lineTo(20, 10);
    ctx.closePath();
    ctx.fillStyle = "#DF3B37";
    ctx.fill();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();
  };

  // Easing function for smooth deceleration
  const easeOutCubic = (t) => {
    return 1 - Math.pow(1 - t, 3);
  };

  // Spin animation
  useEffect(() => {
    if (mustStartSpinning && !isSpinning) {
      setIsSpinning(true);

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
    // eslint-disable-next-line
  }, [mustStartSpinning, prizeNumber]);

  // Initial draw
  useEffect(() => {
    drawWheel(rotation);
    // eslint-disable-next-line
  }, [data, size, rotation]);

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
