import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { useMemo, useRef } from 'react';

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  ariaLabel?: string;
};

function supportsFinePointer() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia?.('(pointer: fine)').matches ?? false;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  type = 'button',
  disabled,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const reduceMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const spring = useMemo(
    () => ({
      stiffness: 260,
      damping: 22,
      mass: 0.45,
    }),
    [],
  );

  const sx = useSpring(x, spring);
  const sy = useSpring(y, spring);

  const enabled = !disabled && !reduceMotion && supportsFinePointer();

  return (
    <motion.button
      ref={ref}
      type={type}
      aria-label={ariaLabel}
      disabled={disabled}
      onClick={onClick}
      onPointerMove={(e) => {
        if (!enabled || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 2);
        x.set(dx * 0.16);
        y.set(dy * 0.16);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{
        x: sx,
        y: sy,
      }}
      whileHover={
        disabled
          ? undefined
          : {
              scale: 1.02,
              boxShadow: '0 0 0 1px rgba(0,229,255,0.25), 0 18px 50px -18px rgba(0,229,255,0.55)',
            }
      }
      whileTap={disabled ? undefined : { scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.button>
  );
}

