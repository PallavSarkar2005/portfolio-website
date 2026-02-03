import React, { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useSpring(0, { stiffness: 800, damping: 35 });
  const cursorY = useSpring(0, { stiffness: 800, damping: 35 });

  useEffect(() => {
    const moveMouse = (e) => {
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
    };

    const handleMouseOver = (e) => {
      if (e.target.closest("a") || e.target.closest("button")) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        translateX: cursorX,
        translateY: cursorY,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        mixBlendMode: "difference",
        width: isHovering ? 60 : 20,
        height: isHovering ? 60 : 20,
        backgroundColor: isHovering ? "rgba(168, 85, 247, 0.2)" : "rgba(34, 211, 238, 0.5)",
        border: isHovering ? "2px solid #a855f7" : "2px solid #22d3ee",
      }}
      transition={{ type: "spring", stiffness: 250, damping: 25 }}
    />
  );
};

export default CustomCursor;