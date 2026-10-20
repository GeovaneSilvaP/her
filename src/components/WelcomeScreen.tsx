import { motion } from "motion/react";
import { Heart } from "lucide-react";

type WelcomeScreenProps = {
  onStart: () => void;
};

function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.6 }}
      className="relative flex min-h-screen min-h-[100dvh] flex-col items-center justify-center gap-5 overflow-hidden bg-rose-950 px-5 py-10 text-center sm:gap-8 sm:px-8 md:px-12 landscape:max-md:gap-3 landscape:max-md:py-4"
    >
      <motion.div
        animate={{ scale: [1, 1.12, 1], rotate: [0, -5, 5, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="text-red-600"
      >
        <Heart
          strokeWidth={1.5}
          className="h-14 w-14 fill-red-700 text-red-700 sm:h-20 sm:w-20 md:h-24 md:w-24 landscape:max-md:h-10 landscape:max-md:w-10"
        />
      </motion.div>

      <div className="relative z-10 w-full max-w-2xl">
        <h1 className="text-balance text-3xl font-bold leading-tight text-rose-100 sm:text-5xl md:text-6xl landscape:max-md:text-2xl">
          Tenho uma surpresa para você
        </h1>

        <p className="mt-3 text-base text-rose-300 sm:mt-5 sm:text-xl md:text-2xl landscape:max-md:mt-2 landscape:max-md:text-sm">
          Prepare seu coração, meu amor...
        </p>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onStart}
        className="relative z-10 min-h-12 touch-manipulation rounded-full bg-red-800 px-8 py-3.5 text-base font-semibold text-rose-50 shadow-lg shadow-black/40 transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-300 sm:px-12 sm:py-4 sm:text-lg md:text-xl"
      >
        Clique aqui ❤️
      </motion.button>

      <motion.div
        aria-hidden="true"
        animate={{ scale: [1, 1.2, 1], opacity: [0.25, 0.5, 0.25] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="pointer-events-none absolute h-64 w-64 rounded-full bg-red-700/20 blur-3xl sm:h-96 sm:w-96"
      />
    </motion.section>
  );
}

export default WelcomeScreen;