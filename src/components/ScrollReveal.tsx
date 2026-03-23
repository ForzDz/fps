import type { ReactNode } from 'react';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'scale' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: number;
  className?: string;
  width?: 'fit-content' | '100%';
}

/* Premium easing curves — inspired by Linear/Vercel */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
const EASE_OUT_QUART = [0.25, 1, 0.5, 1] as const;

export const ScrollReveal = ({
  children,
  animation = 'slide-up',
  delay = 0,
  duration = 0.65,
  className,
  width = '100%'
}: ScrollRevealProps) => {

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: animation === 'slide-up' ? 24 : 0,
      x: animation === 'slide-left' ? 24 : animation === 'slide-right' ? -24 : 0,
      scale: animation === 'scale' ? 0.96 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        delay,
        ease: EASE_OUT_EXPO,
      }
    }
  };

  return (
    <div style={{ width, position: 'relative' }} className={className}>
      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

interface StaggerContainerProps {
  children: ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  className?: string;
}

export const StaggerContainer = ({
  children,
  delayChildren = 0.08,
  staggerChildren = 0.1,
  className
}: StaggerContainerProps) => {
  const variants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      }
    }
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: ReactNode;
  animation?: 'fade' | 'slide-up' | 'scale' | 'slide-left' | 'slide-right';
  duration?: number;
  className?: string;
}

export const StaggerItem = ({
  children,
  animation = 'slide-up',
  duration = 0.55,
  className
}: StaggerItemProps) => {
  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: animation === 'slide-up' ? 28 : 0,
      x: animation === 'slide-left' ? 28 : animation === 'slide-right' ? -28 : 0,
      scale: animation === 'scale' ? 0.93 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration,
        ease: EASE_OUT_QUART,
      }
    }
  };

  return (
    <motion.div variants={variants} className={className}>
      {children}
    </motion.div>
  );
};
