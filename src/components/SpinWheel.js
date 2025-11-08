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

      // Draw text vertically (word by word - better readability)
      ctx.save();
      ctx.rotate(startAngle + segmentAngle / 2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = segment.style.textColor;
      ctx.font = `bold ${segment.style.fontSize || 18}px Arial`;

      const textRadius = radius * 0.7;
      // Split text into words for vertical display
      const text = segment.option.replace(/\s+/g, " ").trim(); // Clean up spaces
      const words = text.split(" ").filter((word) => word.length > 0); // Split by spaces and remove empty strings

      // Calculate total height needed for vertical text
      const lineHeight = (segment.style.fontSize || 18) * 1.3; // Line height between words
      const totalHeight = words.length * lineHeight;
      const startY = -totalHeight / 2 + lineHeight / 2;

      words.forEach((word, i) => {
        const yOffset = startY + i * lineHeight;
        ctx.fillText(word, textRadius, yOffset);
      });

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

      // Normalize current rotation to 0-2π range
      const currentRotationNormalized = rotation % (2 * Math.PI);

      // Calculate the angle to align the winning segment with the pointer at top
      // The winning segment's center angle (from 0 position)
      const winningSegmentCenterAngle =
        prizeNumber * segmentAngle + segmentAngle / 2;

      // Calculate how much we need to rotate to get to the winning position
      // We want the winning segment centered at the top (0 radians after normalization)
      const targetAngle = 2 * Math.PI - winningSegmentCenterAngle;

      // Calculate the shortest path to target, accounting for current position
      let angleDifference = targetAngle - currentRotationNormalized;

      // Normalize to always spin forward
      if (angleDifference < 0) {
        angleDifference += 2 * Math.PI;
      }

      // Add extra full rotations for the spinning effect
      const spins = 5;
      const totalRotationDistance = spins * 2 * Math.PI + angleDifference;

      const duration = 4000; // 4 seconds
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
  }, [mustStartSpinning, prizeNumber]);

  // Initial draw
  useEffect(() => {
    drawWheel(rotation);
  }, [data, size]);

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
