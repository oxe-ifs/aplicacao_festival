import Image from "next/image";

import Header from "@/components/Header";
import BackgroundHome from "@/components/BackgroundHome";
import PatrimonioImateCard from "@/components/PatrimonioImateCard";
import ImportanciaCultCard from "@/components/ImportanciaCultCard"; 
import ImportanciaEconCard from "@/components/ImportanciaEconCard";
import ProgramacaoCard from "@/components/ProgramacaoCard";
import AgendaCard from "@/components/AgendaCard";
import NoticiasCard from "@/components/NoticiasCard";
import SobreCard from "@/components/SobreCard";
import TurismoCard from "@/components/TurismoCard";
import AjudaVisitanteSection from "@/components/AjudaVisitanteSection";
import GaleriaCard from "@/components/GaleriaCard";
import QuemSomosSection from "@/components/QuemSomosSection";
import Footer from "@/components/Footer";

import { FiCalendar } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";

export default function Home() {
  return (
    <div>
      <Header />
      <section
          id="chamada"
          className="relative flex items-center justify-center overflow-hidden"
      >
        {/* --- (BACKGROUND) --- */}
        <BackgroundHome />

        {/* --- CONTEÚDO (FRENTE) --- */}
        <div className="relative z-10 h-170 w-full text-branco-escuro text-shadow-xl9 flex flex-col items-center justify-start pt-22">
          <div className="text-sm md:text-base p-2 border-2 border-branco/20 bg-branco/30 rounded-full text-center w-80 md:w-130 font-bold backdrop-blur-md">
            <p className="uppercase">
              Descubra a cultura e história de Lagarto - Sergipe
            </p>
          </div>

          <div className="w-full text-center md:mt-12 mt-24">
            <h1 className="text-4xl md:text-7xl font-bold drop-shadow-lg">
              Veja Lagarto
              {/*<br className="md:hidden" /> Mandioca*/}
            </h1>
            <p className="text-xl md:text-2xl mt-6 font-semibold drop-shadow-md">
              Celebrando a tradição <br className="md:hidden" /> e cultura
              nordestina
            </p>
          </div>

          <div className="mt-24 md:mt-12 flex gap-6">
            <a
                href="#programacao"
                className="text-center w-40 h-12 text-sm md:text-md md:w-45 p-3 border-2 border-branco-escuro bg-branco rounded-sm text-preto cursor-pointer font-semibold hover:bg-transparent hover:text-branco-escuro transition-all"
            >
              Ver Programação
            </a>
            <a
                href="#noticias"
                className="text-center w-40 h-12 text-sm md:text-md md:w-45 p-3 border-2 border-branco-escuro bg-branco rounded-sm text-preto cursor-pointer font-semibold hover:bg-transparent hover:text-branco-escuro transition-all"
            >
              Saiba Mais
            </a>
          </div>
        </div>

        <Image
            className="w-[100vw] absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-20"
            src="/imgs/wave.svg"
            width={100}
            height={100}
            alt="imagem de onda"
            draggable={false}
        />
      </section>

      <section id="cultura" className="xl:px-40 mt-20">
        <div className="text-center justify-between">
          <h1 className="text-3xl lg:text-5xl font-bold text-balance mb-5">Cultura e História</h1>
          <p className="text-lg text-preto/60 text-balance">
            Conheça os patrimônios históricos e culturais da cidade
          </p>
          <div className="mt-10 px-6 py-6 border border-preto/20 rounded-lg overflow-hidden shadow-md mx-5 md:mx-10 lg:mx-30 mb-10">
            <div className="text-left text-md text-preto/95">
              <p className="py-2">Com mais de 400 anos de história, Lagarto é um pilar de prosperidade e cultura em Sergipe. Fundada originalmente em 1604 no povoado Santo Antônio, a cidade tem suas raízes na expansão territorial e na fé católica. Após uma migração histórica no século XVII para a Colina do Lagarto — motivada pela superação de uma epidemia sob a bênção de Nossa Senhora da Piedade — o município consolidou sua vocação agropecuária e política.</p>
              <p className="py-2">Elevada a Vila em 1697 e a Cidade em 1880, Lagarto construiu uma identidade forte e soberana. Esse orgulho é celebrado anualmente no dia 20 de outubro, o Dia da Lagartinidade, data que reafirma o protagonismo histórico, a religiosidade e a riqueza cultural que fazem de Lagarto uma referência no estado e no país.</p>
            </div>
          </div>
          <h1 className="text-2xl lg:text-4xl font-bold">Tradições, Manifestações Culturais e Patrimônios imateriais</h1>
          <PatrimonioImateCard />
        </div>
      </section>

      <section id="mandioca" className="xl:px-40 mt-15">
         <div className="text-center justify-between mb-5">
          <h1 className="text-3xl lg:text-5xl font-bold">Festival da Mandioca</h1>
        </div>
        <div className="text-center justify-between mb-5">
          <h1 className="text-2xl lg:text-4xl font-bold">História do Festival</h1>
          <p className="text-lg text-preto/60 text-balance">
            Conheça a história e a importância cultural do nosso festival
          </p>
          <div className="mt-10 px-6 py-6 border border-preto/20 rounded-lg overflow-hidden shadow-md mx-5 md:mx-10 lg:mx-30 mb-10">
            <div className="text-left text-md text-preto/95">
              <p className="py-2">O <strong>Festival da Mandioca</strong> em Lagarto, Sergipe, é uma das principais festas juninas do estado, valorizando a cultura local e a agricultura, criado em 2009 pelo ex-prefeito Valmir Monteiro. O evento celebra a mandioca, motor econômico regional, e inclui forró, cavalgadas e a tradicional Pega do Mastro.</p>
              <p className="py-2"> O Festival é o coração dos Festejos Juninos de Lagarto, uma celebração que há décadas reúne a comunidade sergipana em torno de suas raízes culturais e gastronômicas. A mandioca, alimento essencial da cultura nordestina, é homenageada através de suas diversas formas e sabores.</p>
              <p className="py-2">Durante os festejos, a cidade se transforma em um grande palco de cores, sons e sabores. As tradicionais quadrilhas juninas, o forró pé-de-serra, as comidas típicas e o artesanato local criam uma atmosfera única que atrai milhares de visitantes de todo o Brasil.</p>
              <p className="py-2">Mais do que uma festa, os Festejos Juninos de Lagarto representam a preservação da identidade cultural sergipana e a valorização das tradições que passam de geração em geração, fortalecendo os laços comunitários e promovendo o turismo regional.</p>
            </div>
          </div>
        </div>
        <div className="text-center justify-between mb-5">
          <h1 className="text-2xl lg:text-4xl font-bold">Importância Cultural</h1>
          <ImportanciaCultCard />
        </div>
        <div className="text-center justify-between mb-5">
          <h1 className="text-2xl lg:text-4xl font-bold">Importância Econômica</h1>
          <ImportanciaEconCard />
        </div>
        <div className="text-center justify-between mb-5">
          <h1 className="text-2xl lg:text-4xl font-bold">Programação Oficial</h1>
          <p className="text-lg text-preto/60 text-balance">
            Confira toda a programação dos festejos juninos 2026
          </p>
        </div>
        <ProgramacaoCard />
      </section>

      <section id="agenda" className="xl:px-40 mt-20">
        <div className="text-center justify-between xl:px-15 md:px-10 px-6">
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">Agenda Festiva</h1>
          <p className="text-lg text-preto/60 text-balance">
            Veja sobre as festividades e eventos culturais
          </p>
        </div>
        <AgendaCard />
      </section>

      <section id="turismo" className="xl:px-40 mt-20">
        <div className="text-center justify-between xl:px-15 md:px-10 px-6">
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">Conheça Lagarto</h1>
          <p className="text-lg text-preto/60 text-balance">
            Descubra o que nossa cidade tem a oferecer durante sua visita
          </p>
        </div>
        <TurismoCard />
      </section>

      <section id="informacoes" className="xl:px-40 mt-20">
        <div className="text-center justify-between xl:px-15 md:px-10 px-6">
          <h1 className="text-3xl lg:text-5xl font-bold mb-5">Ajuda ao Visitante</h1>
          <p className="text-lg text-preto/60 text-balance">
            Informações essenciais para quem está visitando Lagarto
          </p>
        </div>
        <AjudaVisitanteSection />
      </section>

      <section id="galeria" className="xl:px-40 mt-20">
        <div className="text-center justify-between">
          <h1 className="text-3xl lg:text-5xl font-bold text-balance mb-5">Galeria</h1>
          <p className="text-lg text-preto/60 text-balance mx-10">
            Fotos que mostram nossa cultura e tradições
          </p>
        </div>
        <GaleriaCard />
        <div className="w-full text-center mt-8 mb-16">
          <a href="#" className="text-sm font-semibold text-azul max-w-40 py-2 px-4 rounded-md border border-azul hover:bg-azul hover:text-branco">Ver Galeria Completa</a>
        </div>
      </section>

      <section id="quem_somos" className="xl:px-40 mt-20">
        <div className="text-center justify-between">
          <h1 className="text-3xl lg:text-5xl font-bold text-balance mb-5">Quem Somos</h1>
          <p className="text-lg text-preto/60 text-balance mx-10">
            Um projeto feito com carinho por quem acredita em Lagarto
          </p>
        </div>
        <QuemSomosSection />
      </section>

      <Footer/>
    </div>
  );
}
