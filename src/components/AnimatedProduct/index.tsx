import { useState } from "react";
import { Image, usePrefersReducedMotion } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import sensor from "../../assets/Images/sensor.png";

export const AnimatedSensor = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isHovering, setIsHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const variants = {
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 20,
        damping: 5,
      },
    },
  };

  const scale = isHovering ? 1.2 : 1;
  x.set(isHovering ? 10 : 0);
  y.set(isHovering ? 10 : 0);

  const xRange = [-10, 10];
  const yRange = [-10, 10];
  const xOutput = useTransform(
    x,
    xRange,
    xRange.map((n) => -n)
  );
  const yOutput = useTransform(
    y,
    yRange,
    yRange.map((n) => -n)
  );

  const animationProps = prefersReducedMotion
    ? {}
    : { animate: "hover", variants };

  return (
    <motion.div
      style={{
        display: "inline-block",
        position: "relative",
        width: 200,
        height: 200,
      }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          scale,
          x: xOutput,
          y: yOutput,
        }}
        {...animationProps}
      >
        <Image src={sensor} alt="sensor" />
      </motion.div>
    </motion.div>
  );
};
