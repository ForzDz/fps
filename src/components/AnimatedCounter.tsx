import React, { useEffect, useRef } from 'react';
import { useInView, animate } from 'framer-motion';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ 
  value, 
  duration = 2.5, 
  suffix = '',
  prefix = ''
}) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.3 });

  useEffect(() => {
    const node = nodeRef.current;
    if (isInView && node) {
      const controls = animate(0, value, {
        duration: duration,
        ease: "easeOut",
        onUpdate(latest) {
          node.textContent = prefix + Math.round(latest).toString() + suffix;
        }
      });
      return () => controls.stop();
    }
  }, [value, duration, isInView, suffix, prefix]);

  return <span ref={nodeRef}>{prefix}0{suffix}</span>;
};
