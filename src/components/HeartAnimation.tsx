import { useEffect } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Heart } from "lucide-react";

type HeartAnimationProps = {
  onFinish: () => void;
};

const gato = "/fotos%20e%20m%C3%BAsica/fotos/gato.jpeg";

const hearts = Array.from({ length: 45 }, (_, index) => ({
  id: index,
  left: (index * 37 + 11) % 94,
  size: 18 + ((index * 13) % 25),
  delay: (index % 15) * 0.08,
  duration: 1.8 + ((index * 7) % 12) / 10,
  rotation: (index % 2 === 0 ? 1 : -1) * (20 + (index % 50)),
}));

function HeartAnimation({ onFinish }: HeartAnimationProps) {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(onFinish, 3200);

    return () => window.clearTimeout(timeout);
  }, [onFinish]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex min-h-screen min-h-[100dvh] flex-col items-center justify-center gap-5 overflow-hidden bg-rose-950 px-4 py-8 sm:gap-8 sm:px-8 landscape:max-md:gap-3 landscape:max-md:py-4"
    >
      <h2 className="relative z-10 max-w-3xl text-balance text-center text-2xl font-bold leading-tight text-rose-100 sm:text-4xl md:text-5xl landscape:max-md:text-xl">
        Você é muito especial para mim!
      </h2>

      <motion.img
        src={gato}
        alt="Uma lembrança especial"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: prefersReducedMotion ? 0 : [0, -5, 0],
        }}
        transition={{
          opacity: { duration: 0.7 },
          scale: { duration: 0.7 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10 h-auto max-h-[42svh] w-auto max-w-[min(78vw,22rem)] rounded-2xl border border-rose-800 object-contain shadow-2xl shadow-black/40 sm:max-h-[48svh] sm:max-w-[min(60vw,26rem)] md:max-h-[52svh] landscape:max-md:max-h-[55svh]"
      />

      {!prefersReducedMotion &&
        hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ y: "110svh", x: 0, opacity: 0, rotate: 0 }}
            animate={{
              y: "-15svh",
              x: [0, 25, -20, 10, 0],
              opacity: [0, 0.9, 0.9, 0.7, 0],
              rotate: heart.rotation,
            }}
            transition={{
              duration: heart.duration,
              delay: heart.delay,
              ease: "easeOut",
            }}
            className="pointer-events-none absolute bottom-0 z-20"
            style={{ left: `${heart.left}%` }}
          >
            <Heart
              size={heart.size}
              aria-hidden="true"
              className={
                heart.id % 3 === 0
                  ? "fill-red-700 text-red-700"
                  : heart.id % 3 === 1
                    ? "fill-rose-600 text-rose-600"
                    : "fill-red-500/80 text-red-500/80"
              }
            />
          </motion.div>
        ))}
    </motion.section>
  );
}

export default HeartAnimation;
