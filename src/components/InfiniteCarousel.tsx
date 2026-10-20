import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

type Photo = {
  src: string;
  alt: string;
};

type InfiniteCarouselProps = {
  photos: Photo[];
};

function InfiniteCarousel({ photos }: InfiniteCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const duplicatedPhotos = [...photos, ...photos];

  return (
    <div
      className="group w-full overflow-hidden"
      aria-label="Carrossel de momentos juntos"
    >
      <motion.div
        ref={trackRef}
        className="flex w-max gap-4 py-5 sm:gap-5 md:gap-6"
        animate={prefersReducedMotion ? { x: 0 } : { x: ["0%", "-50%"] }}
        transition={{
          x: {
            duration: 35,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        whileHover={
          prefersReducedMotion ? undefined : { animationPlayState: "paused" }
        }
      >
        {duplicatedPhotos.map((photo, index) => (
          <motion.div
            key={`${photo.src}-${index}`}
            className="w-52 shrink-0 overflow-hidden rounded-2xl border border-rose-800 bg-rose-900/50 shadow-xl shadow-black/30 sm:w-64 md:w-72"
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.25 }}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading={index < photos.length ? "lazy" : "eager"}
              draggable={false}
              className="aspect-[3/4] h-auto w-full object-cover"
            />
            <div className="flex items-center justify-center gap-2 px-3 py-3 text-sm text-rose-200 sm:text-base">
              <span>Um momento nosso</span>
              <span aria-hidden="true">❤️</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default InfiniteCarousel;
