// components/ui/Pin.tsx
"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // keep this; if you don't have it, replace with a simple join

type PinContainerProps = {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
};

export const PinContainer: React.FC<PinContainerProps> = ({
  children,
  title,
  href,
  className,
  containerClassName,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [style, setStyle] = useState<React.CSSProperties>({
    transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
    transition: "transform 0.5s ease",
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top; // y position within the element.

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // sensitivity: change these to control max tilt angle
    const maxRotate = 10; // degrees
    const rotateX = ((y - centerY) / centerY) * -maxRotate; // invert for natural feel
    const rotateY = ((x - centerX) / centerX) * maxRotate;

    // smoother, low-delay transform
    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(0.88)`,
      transition: "transform 120ms ease-out",
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
      transition: "transform 400ms cubic-bezier(.2,.9,.2,1)",
    });
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className={cn("relative group/pin", containerClassName)}
    >
      <motion.div
        // style must be React.CSSProperties — we used that type for state
        style={style}
        className={cn(
          "p-4 rounded-2xl bg-black/30 backdrop-blur-sm border border-white/8 shadow-xl",
          className
        )}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="w-full h-full"
        >
          {children}
        </div>
      </motion.div>

      <PinPerspective title={title} href={href} />
    </div>                                      
  );
};

/* ------------------------------
   PinPerspective (simplified)
   Keeps the label and subtle effects.
   You can paste your original perspective content back here if needed.
   ------------------------------ */
export const PinPerspective: React.FC<{ title?: string; href?: string }> = ({
  title,
  href,
}) => {
  return (
    <div className="pointer-events-none w-full h-20 flex items-center justify-center opacity-100 z-50 mt-4">
      <div className="w-full max-w-sm flex justify-center">
        {title ? (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950/80 py-1 px-4 ring-1 ring-white/10"
          >
            <span className="text-white text-xs font-bold">{title}</span>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/60 to-emerald-400/0" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

/* ------------------------------
  NOTE:
  - If `cn` is not available, replace `cn(...)` with simple string concatenation:
      const cn = (...args: Array<string | false | null | undefined>) => args.filter(Boolean).join(" ");
  - If you want a stronger tilt, increase `maxRotate`.
  - If you want an inner parallax (e.g. images inside slightly move), I can add layered transforms.
  ------------------------------ */
