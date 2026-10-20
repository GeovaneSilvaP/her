import { useEffect, useState } from "react";
import { motion } from "motion/react";

type CountdownScreenProps = {
  onFinish: () => void;
};

const ela = "/fotos%20e%20m%C3%BAsica/fotos/9.jpeg";

function CountdownScreen({ onFinish }: CountdownScreenProps) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCount((current) => {
        if (current <= 1) {
          window.clearInterval(interval);
          return 0;
        }

        return current - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count !== 0) return;

    const timeout = window.setTimeout(onFinish, 700);

    return () => window.clearTimeout(timeout);
  }, [count, onFinish]);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative flex min-h-screen min-h-[100dvh] flex-col items-center justify-center gap-4 overflow-hidden bg-rose-950 px-4 py-8 text-center sm:gap-6 sm:px-8 sm:py-10 landscape:max-md:gap-2 landscape:max-md:py-3"
    >
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-xl text-balance text-lg font-medium leading-snug text-rose-100 sm:text-2xl md:text-3xl landscape:max-md:text-base"
      >
        Uma surpresa está chegando...
      </motion.p>

      <motion.span
        key={count}
        initial={{ opacity: 0, scale: 1.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 text-6xl font-bold leading-none text-rose-300 sm:text-7xl md:text-8xl landscape:max-md:text-4xl"
      >
        {count === 0 ? "❤️" : count}
      </motion.span>

      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -7, 0],
        }}
        transition={{
          opacity: { duration: 0.8, delay: 0.2 },
          scale: { duration: 0.8, delay: 0.2 },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
        className="relative z-10 w-full max-w-[min(78vw,20rem)] sm:max-w-[min(55vw,22rem)] md:max-w-[min(42vw,24rem)] landscape:max-md:max-w-[min(30vw,12rem)]"
      >
        <div className="overflow-hidden rounded-2xl border-2 border-rose-800 bg-black/20 shadow-2xl shadow-red-950/60 sm:rounded-3xl">
          <img
            src={ela}
            alt="Uma lembrança especial de vocês"
            className="block h-auto max-h-[42svh] w-full object-contain sm:max-h-[48svh] md:max-h-[52svh] landscape:max-md:max-h-[45svh]"
          />
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 max-w-md text-sm font-medium text-rose-200 sm:text-lg md:text-xl landscape:max-md:text-xs"
      >
        Eita, como ela é muito fofinhaaa ❤️
      </motion.p>

      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.65, 0.3] }}
        transition={{ duration: 2.5, repeat: Infinity }}
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-red-700/20 blur-3xl sm:h-96 sm:w-96"
      />
    </motion.section>
  );
}

export default CountdownScreen;
