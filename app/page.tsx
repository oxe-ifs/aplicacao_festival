import Image from "next/image";

import Header from "@/components/Header";
import ProgramacaoCard from "@/components/ProgramacaoCard";
import NoticiasCard from "@/components/NoticiasCard";
import SobreCard from "@/components/SobreCard";

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
        <div className="h-200 w-full bg-azul text-branco flex flex-col items-center justify-start pt-22">
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

          <div className="mt-24 md:mt-12 flex gap-6">
            <a
              href="#programacao"
              className="text-center w-40 md:w-45 p-3 border-2 border-branco bg-branco rounded-sm text-preto cursor-pointer font-semibold hover:bg-transparent hover:text-branco"
            >
              Ver Programação
            </a>
            <a
              href="#noticias"
              className="text-center w-40 md:w-45 p-3 border-2 border-branco/50 rounded-sm cursor-pointer font-semibold hover:bg-branco hover:text-preto"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        <Image
          className="w-[100vw] absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none"
          src="imgs/wave.svg"
          width={100}
          height={100}
          alt="imagem de onda"
          draggable={false}
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

      <section id="noticias" className="xl:px-40 mt-20">
        <div className="text-center justify-between">
          <h1 className="text-3xl font-bold text-balance">Notícias e Comunicados</h1>
          <p className="text-lg text-preto/60 text-balance">
            Fique por dentro das últimas novidades dos Festejos
          </p>
        </div>
        <NoticiasCard />
        <div className="w-full text-center mt-8 mb-16">
          <a href="#" className="text-sm font-semibold text-azul max-w-40 py-2 px-4 rounded-md border border-azul hover:bg-azul hover:text-branco">Ver Todas as Notícias</a>
        </div>
      </section>

      <section id="sobre" className="xl:px-40 mt-20">
        <div className="text-center justify-between xl:px-15 md:px-10 px-6">
          <h1 className="text-3xl font-bold text-balance">Sobre os Festejos</h1>
          <p className="text-lg text-preto/60 text-balance">
            Conheça a história e a importância cultural do nosso festival
          </p>
          <div className="mt-10 px-6 py-6 border border-preto/20 rounded-lg overflow-hidden shadow-md mx-5 md:mx-10 lg:mx-30 mb-10">
            <div className="text-left text-md text-preto/95">
              <p className="py-2">O <strong>Festival da Mandioca</strong> é o coração dos Festejos Juninos de Lagarto, uma celebração que há décadas reúne a comunidade sergipana em torno de suas raízes culturais e gastronômicas. A mandioca, alimento essencial da cultura nordestina, é homenageada através de suas diversas formas e sabores.</p>
              <p className="py-2">Durante os festejos, a cidade se transforma em um grande palco de cores, sons e sabores. As tradicionais quadrilhas juninas, o forró pé-de-serra, as comidas típicas e o artesanato local criam uma atmosfera única que atrai milhares de visitantes de todo o Brasil.</p>
              <p className="py-2">Mais do que uma festa, os Festejos Juninos de Lagarto representam a preservação da identidade cultural sergipana e a valorização das tradições que passam de geração em geração, fortalecendo os laços comunitários e promovendo o turismo regional.</p>
            </div>
          </div>
        </div>
        <SobreCard />
      </section>
    </div>
  );
}
