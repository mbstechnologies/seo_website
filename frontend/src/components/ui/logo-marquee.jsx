"use client";

import React, { memo, useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useMotionValue, animate, motion } from "motion/react";
import useMeasure from "react-use-measure";

const InfiniteSlider = memo(function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  durationOnHover,
  direction = "horizontal",
  reverse = false,
  className,
}) {
  const [currentDuration, setCurrentDuration] = useState(duration);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    let controls;

    if (isTransitioning) {
      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration:
          currentDuration * Math.abs((translation.get() - to) / contentSize),
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prev) => prev + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: currentDuration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => translation.set(from),
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentDuration,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = durationOnHover
    ? {
      onHoverStart: () => {
        setIsTransitioning(true);
        setCurrentDuration(durationOnHover);
      },
      onHoverEnd: () => {
        setIsTransitioning(true);
        setCurrentDuration(duration);
      },
    }
    : {};

  return (
    <div className={cn("overflow-hidden", className)}>
      <motion.div
        ref={ref}
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
});

const LogoImage = memo(function LogoImage({ logo }) {
  if (logo.svgPath) {
    return (
      <div
        className="tech-logo-item"
        style={{ '--brand-color': logo.color || '#2878E5' }}
        title={logo.name}
      >
        <svg
          viewBox={logo.viewBox || "0 0 24 24"}
          fill="currentColor"
          className="tech-logo-svg"
          aria-hidden="true"
        >
          <path d={logo.svgPath} />
        </svg>
        <span className="tech-logo-label">{logo.name}</span>
      </div>
    );
  }

  return (
    <img
      alt={logo.alt || logo.name}
      src={logo.src}
      width={logo.width ?? "auto"}
      height={logo.height ?? "auto"}
      loading="lazy"
      className="pointer-events-none h-6 select-none md:h-7 object-contain opacity-85 hover:opacity-100 transition-opacity"
    />
  );
});

export const LogoMarquee = memo(function LogoMarquee({
  logos,
  className,
}) {
  return (
    <div
      className={cn(
        "w-full overflow-hidden py-2",
        className,
      )}
    >
      <InfiniteSlider gap={64} reverse duration={45} durationOnHover={20}>
        {[...logos, ...logos].map((logo, i) => (
          <LogoImage key={`${logo.alt || logo.name}-${i}`} logo={logo} />
        ))}
      </InfiniteSlider>
    </div>
  );
});

LogoMarquee.displayName = "LogoMarquee";
export default LogoMarquee;

