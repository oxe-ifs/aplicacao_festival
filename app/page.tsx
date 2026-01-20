import Image from "next/image";

import Header from "@/components/Header";
import ProgramacaoCard from "@/components/ProgramacaoCard";

import { FiCalendar } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export default function Home() {
  return (
    <div>
      <Header />
      <section
        id="chamada"
        className="relative flex items-center justify-center"
      >
        <div className="h-180 w-full bg-azul text-branco flex flex-col items-center justify-start pt-22">
          <div className="text-sm md:text-base p-2 border-2 border-branco/20 bg-branco/30 rounded-full text-center w-80 md:w-130 font-bold">
            <p className="uppercase">
              Prefeitura Municipal de Lagarto - Sergipe
            </p>
          </div>

          <div className="w-full text-center md:mt-12 mt-24">
            <h1 className="text-4xl md:text-7xl font-bold">
              Festival da <br className="md:hidden" /> Mandioca
            </h1>
            <p className="text-xl md:text-2xl mt-6 font-semibold">
              Celebrando a tradição <br className="md:hidden" /> e cultura
              nordestina
            </p>
          </div>

          <div className="mt-24 md:mt-12 flex items-center justify-center text-base gap-6 font-bold">
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <FiCalendar className="w-5 h-5 md:w-8 md:h-8" />
              <p className="leading-none">Junho 2026</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
              <GrLocation className="w-5 h-5 md:w-8 md:h-8" />
              <p className="leading-none">Lagarto / SE</p>
            </div>
          </div>
        </div>

        <Image
          className="w-[100vw] absolute bottom-0 left-1/2 -translate-x-1/2"
          src="imgs/wave.svg"
          width={100}
          height={100}
          alt="imagem de onda"
        />
      </section>

      <section id="programacao" className="xl:px-40 mt-15">
        <div className="text-center justify-between">
          <h1 className="text-3xl font-bold">Programação Oficial</h1>
          <p className="text-lg text-preto/60 text-balance">
            Confira toda a programação dos festejos juninos 2026
          </p>
        </div>
        <ProgramacaoCard />
      </section>
    </div>
  );
}
