import { motion } from "motion/react";
import { Heart } from "lucide-react";
import InfiniteCarousel from "../components/InfiniteCarousel";

const fotos = [
  {
    src: "/fotos%20e%20m%C3%BAsica/fotos/foto1.jpeg",
    alt: "Um momento especial nosso",
  },
  {
    src: "/fotos%20e%20m%C3%BAsica/fotos/11.jpeg",
    alt: "Uma lembrança do nosso amor",
  },
  {
    src: "/fotos%20e%20m%C3%BAsica/fotos/10.jpeg",
    alt: "Mais um momento juntos",
  },
  {
    src: "/fotos%20e%20m%C3%BAsica/fotos/foto3.jpeg",
    alt: "Uma memória especial",
  },
  {
    src: "/fotos%20e%20m%C3%BAsica/fotos/foto4.jpeg",
    alt: "Um registro do nosso carinho",
  },
  {
    src: "/fotos%20e%20m%C3%BAsica/fotos/foto5.jpeg",
    alt: "Uma lembrança inesquecível",
  },
  {
    src: "/fotos%20e%20m%C3%BAsica/fotos/foto6.jpeg",
    alt: "Mais uma foto nossa",
  },
];

const pixelPink = "/fotos%20e%20m%C3%BAsica/fotos/pixel-pink.gif";

const mochaBear = "/fotos%20e%20m%C3%BAsica/fotos/mocha-bear-hearts.gif";

const fotocard = "/fotos%20e%20m%C3%BAsica/fotos/fotocard.jpeg";

function LovePage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-rose-950 text-rose-100">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-16 px-4 py-12 sm:gap-20 sm:px-6 sm:py-16 md:gap-24 md:px-8 md:py-20">
        {/* Apresentação */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col items-center gap-5 text-center sm:gap-7"
        >
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Heart
              aria-hidden="true"
              className="h-10 w-10 fill-rose-500 text-rose-500 sm:h-12 sm:w-12"
            />
          </motion.div>

          <h1 className="text-3xl font-bold leading-tight text-rose-200 sm:text-4xl md:text-5xl">
            Minha querida Alrielle ❤️
          </h1>

          <p className="max-w-3xl text-base leading-7 text-rose-100/90 sm:text-lg sm:leading-8 md:text-xl">
            Desde que você entrou na minha vida, os dias ficaram mais bonitos e
            fáceis de viver. Eu adoro o seu sorriso, a paz que você me traz e o
            jeito único que você tem de transformar qualquer momento simples em
            algo especial. Não sei onde a gente vai chegar, mas só de saber que
            é ao seu lado já tenho a certeza mais bonita do mundo. Obrigado por
            ser quem você é.
          </p>

          <motion.img
            src={pixelPink}
            alt="Uma animação romântica para você"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-auto max-h-[40svh] w-auto max-w-full object-contain sm:max-h-[45svh]"
          />

          <p className="text-sm italic text-rose-300 sm:text-base">
            Você deixa meus dias mais felizes. ❤️
          </p>
        </motion.section>

        {/* Mural de lembranças */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col items-center gap-5 sm:gap-7"
        >
          <div className="text-center">
            <h2 className="text-2xl font-bold text-rose-200 sm:text-4xl md:text-5xl">
              Nossas lembranças ❤️
            </h2>

            <p className="mt-3 text-sm text-rose-300 sm:text-base">
              Pequenos momentos que guardam grandes sentimentos.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="w-full overflow-hidden rounded-2xl border border-rose-800 bg-rose-900/30 shadow-2xl shadow-black/30 sm:rounded-3xl"
          >
            <img
              src={fotocard}
              alt="Uma montagem especial com nossas fotos"
              loading="lazy"
              className="block h-auto w-full object-contain"
            />
          </motion.div>
        </motion.section>

        {/* Mensagem de amor */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col items-center gap-5 text-center sm:gap-7"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
          >
            <Heart
              aria-hidden="true"
              className="h-10 w-10 fill-red-600 text-red-600 sm:h-12 sm:w-12"
            />
          </motion.div>

          <h2 className="text-2xl font-bold text-rose-200 sm:text-4xl md:text-5xl">
            Você é a melhor ❤️
          </h2>

          <p className="max-w-3xl text-base leading-7 text-rose-100/90 sm:text-lg sm:leading-8 md:text-xl">
            Eu nunca me cansaria de te olhar e te dizer que tudo dentro de mim
            ama tudo que vem de você. Teu toque, teu abraço, teu cheiro são a
            esperança de um lugar de segurança, onde eu e você podemos sempre
            ser eu e você…
          </p>

          <motion.img
            src={mochaBear}
            alt="Um ursinho em uma animação cheia de carinho"
            loading="lazy"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="h-auto max-h-[40svh] w-auto max-w-full object-contain sm:max-h-[45svh]"
          />

          <p className="max-w-xl pt-2 text-base italic leading-relaxed text-rose-300 sm:text-lg md:text-xl">
            Com todo o meu amor, para você. ❤️
          </p>
        </motion.section>
      </div>

      {/* Carrossel infinito */}
      <motion.section
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col items-center gap-4 overflow-hidden pb-12 sm:pb-16 md:pb-20"
      >
        <div className="px-4 text-center">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mb-3 flex justify-center"
          >
            <Heart
              aria-hidden="true"
              className="h-9 w-9 fill-rose-500 text-rose-500 sm:h-11 sm:w-11"
            />
          </motion.div>

          <h2 className="text-2xl font-bold text-rose-200 sm:text-4xl md:text-5xl">
            Momentos juntos...
          </h2>

          <p className="mx-auto mt-3 max-w-lg text-sm leading-6 text-rose-300 sm:text-base sm:leading-7">
            Cada foto guarda um pedacinho da nossa história e cada lembrança me
            faz agradecer por ter você ao meu lado. ❤️
          </p>
        </div>

        <div className="mt-2 w-full">
          <InfiniteCarousel photos={fotos} />
        </div>

        <p className="px-4 pt-2 text-center text-xs italic text-rose-400 sm:text-sm">
          E que a gente ainda tenha muitas lembranças para criar juntos...
        </p>
      </motion.section>

      {/* Encerramento */}
      <footer className="border-t border-rose-800/60 px-4 py-8 text-center sm:py-10">
        <Heart
          aria-hidden="true"
          className="mx-auto mb-3 h-6 w-6 fill-rose-600 text-rose-600"
        />

        <p className="text-sm text-rose-300 sm:text-base">
          Feito com amor, especialmente para você, Alrielle. ❤️
        </p>
      </footer>
    </main>
  );
}

export default LovePage;
