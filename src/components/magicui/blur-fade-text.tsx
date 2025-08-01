"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useMemo } from "react";

interface BlurFadeTextProps {
  text: string;
  suffix?: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}
const BlurFadeText = ({
  text,
  suffix,
  className,
  variant,
  characterDelay = 0.03,
  delay = 0,
  yOffset = 8,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: "blur(8px)" },
    visible: { y: -yOffset, opacity: 1, filter: "blur(0px)" },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className="flex items-baseline">
        <AnimatePresence>
          {characters.map((char, i) => (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={combinedVariants}
              transition={{
                yoyo: Infinity,
                delay: delay + i * characterDelay,
                ease: "easeOut",
              }}
              className={cn("inline-block", className, {
                "emoji": /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/gu.test(char),
                "wave-emoji": char === "👋"
              })}
              style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
        {suffix && (
          <motion.span
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={combinedVariants}
            transition={{
              yoyo: Infinity,
              delay: delay + characters.length * characterDelay,
              ease: "easeOut",
            }}
            className={cn("inline-block ml-1", className, "wave-emoji")}
          >
            {suffix}
          </motion.span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-baseline">
      <AnimatePresence>
        <motion.span
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={combinedVariants}
          transition={{
            yoyo: Infinity,
            delay,
            ease: "easeOut",
          }}
          className={cn("inline-block", className)}
        >
          {text}
        </motion.span>
        {suffix && (
          <motion.span
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={combinedVariants}
            transition={{
              yoyo: Infinity,
              delay: delay + 0.1,
              ease: "easeOut",
            }}
            className={cn("inline-block ml-1", className, "wave-emoji")}
          >
            {suffix}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BlurFadeText;
