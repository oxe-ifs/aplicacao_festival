import Header from "@/components/Header";

import { FiCalendar } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="schedule" className="xl:px-40">
        <div className="text-center justify-between">
          <h1 className="text-3xl font-bold">Programação Oficial</h1>
          <p className="text-lg text-preto/60 text-balance">Confira toda a programação dos festejos juninos 2026</p>
        </div>
        <div className="md:grid-cols-2 lg:grid-cols-3 grid gap-4 mt-8 p-4">
          <div data-slot="card" className="py-6 border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div data-slot="card-header" className="bg-azul/15 justify-between flex items-center px-4 py-2 mb-4">
              <div>
                <h1 data-slot="card-title" className="text-lg font-semibold">13 de Junho</h1>
                <p className="text-preto/60">Quinta-Feira</p>
              </div>
              <FiCalendar className="w-6 h-6 text-azul"/>
            </div>
            <div data-slot="card-content" className="pt-4 px-4">
              <div className="space-y-4">
                <div className="border-l-2 border-azul pl-4 py-2">
                  <div className="flex items-start gap-3">
                    <FaRegClock className="inline w-4 h-4 mr-2"/>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">19h00</p>
                        <p className="bg-azul-escuro text-branco px-2 py-1 rounded text-xs font-semibold">Cerimônia</p>
                      </div>
                      <p className="font-medium">Abertura Oficial</p>
                      <div className="flex items-center gap-2 text-sm text-preto/60">
                        <GrLocation className="inline w-4 h-4 mr-1"/>
                        <span>Praça Central</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-l-2 border-azul pl-4 py-2">
                  <div className="flex items-start gap-3">
                    <FaRegClock className="inline w-4 h-4 mr-2"/>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">20h00</p>
                        <p className="bg-azul text-branco px-2 py-1 rounded text-xs font-semibold">Show</p>
                      </div>
                      <p className="font-medium">Show de Forró com Trio Nordestino</p>
                      <div className="flex items-center gap-2 text-sm text-preto/60">
                        <GrLocation className="inline w-4 h-4 mr-1"/>
                        <span>Palco Principal</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-l-2 border-azul pl-4 py-2">
                  <div className="flex items-start gap-3">
                    <FaRegClock className="inline w-4 h-4 mr-2"/>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">22h30</p>
                        <p className="bg-azul/15 px-2 py-1 rounded text-xs font-semibold">Apresentação</p>
                      </div>
                      <p className="font-medium">Quadrilha Junina Matuta</p>
                      <div className="flex items-center gap-2 text-sm text-preto/60">
                        <GrLocation className="inline w-4 h-4 mr-1"/>
                        <span>Palco Principal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-slot="card" className="py-6 border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div data-slot="card-header" className="bg-azul/15 justify-between flex items-center px-4 py-2 mb-4">
              <div>
                <h1 data-slot="card-title" className="text-lg font-semibold">14 de Junho</h1>
                <p className="text-preto/60">Sexta-Feira</p>
              </div>
              <FiCalendar className="w-6 h-6 text-azul"/>
            </div>
            <div data-slot="card-content" className="pt-4 px-4">
              <div className="space-y-4">
                <div className="border-l-2 border-azul pl-4 py-2">
                  <div className="flex items-start gap-3">
                    <FaRegClock className="inline w-4 h-4 mr-2"/>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">18h00</p>
                        <p className="bg-azul/80 text-branco px-2 py-1 rounded text-xs font-semibold">Gastronomia</p>
                      </div>
                      <p className="font-medium">Festival Gastronômico da Mandioca</p>
                      <div className="flex items-center gap-2 text-sm text-preto/60">
                        <GrLocation className="inline w-4 h-4 mr-1"/>
                        <span>Pavilhão de Alimentação</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-l-2 border-azul pl-4 py-2">
                  <div className="flex items-start gap-3">
                    <FaRegClock className="inline w-4 h-4 mr-2"/>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">21h00</p>
                        <p className="bg-azul-escuro text-branco px-2 py-1 rounded text-xs font-semibold">Concurso</p>
                      </div>
                      <p className="font-medium">Concurso de Quadrilhas</p>
                      <div className="flex items-center gap-2 text-sm text-preto/60">
                        <GrLocation className="inline w-4 h-4 mr-1"/>
                        <span>Palco Principal</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-l-2 border-azul pl-4 py-2">
                  <div className="flex items-start gap-3">
                    <FaRegClock className="inline w-4 h-4 mr-2"/>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">23h00</p>
                        <p className="bg-azul/70 text-branco px-2 py-1 rounded text-xs font-semibold">Atração</p>
                      </div>
                      <p className="font-medium">Show Pirotécnico</p>
                      <div className="flex items-center gap-2 text-sm text-preto/60">
                        <GrLocation className="inline w-4 h-4 mr-1"/>
                        <span>Praça Central</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-slot="card" className="py-6 border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <div data-slot="card-header" className="bg-azul/15 justify-between flex items-center px-4 py-2 mb-4">
              <div>
                <h1 data-slot="card-title" className="text-lg font-semibold">15 de Junho</h1>
                <p className="text-preto/60">Sábado</p>
              </div>
              <FiCalendar className="w-6 h-6 text-azul"/>
            </div>
            <div data-slot="card-content" className="pt-4 px-4">
              <div className="space-y-4">
                <div className="border-l-2 border-azul pl-4 py-2">
                  <div className="flex items-start gap-3">
                    <FaRegClock className="inline w-4 h-4 mr-2"/>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">16h00</p>
                        <p className="bg-azul/15 px-2 py-1 rounded text-xs font-semibold">Feira</p>
                      </div>
                      <p className="font-medium">Feira de Artesanato</p>
                      <div className="flex items-center gap-2 text-sm text-preto/60">
                        <GrLocation className="inline w-4 h-4 mr-1"/>
                        <span>Área de Exposições</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-l-2 border-azul pl-4 py-2">
                  <div className="flex items-start gap-3">
                    <FaRegClock className="inline w-4 h-4 mr-2"/>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">20h00</p>
                        <p className="bg-azul/70 text-branco px-2 py-1 rounded text-xs font-semibold">Cultura</p>
                      </div>
                      <p className="font-medium">Apresentação Cultural</p>
                      <div className="flex items-center gap-2 text-sm text-preto/60">
                        <GrLocation className="inline w-4 h-4 mr-1"/>
                        <span>Palco Secundário</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-l-2 border-azul pl-4 py-2">
                  <div className="flex items-start gap-3">
                    <FaRegClock className="inline w-4 h-4 mr-2"/>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-sm">22h00</p>
                        <p className="bg-azul text-branco px-2 py-1 rounded text-xs font-semibold">Show</p>
                      </div>
                      <p className="font-medium">Grande Show de Encerramento</p>
                      <div className="flex items-center gap-2 text-sm text-preto/60">
                        <GrLocation className="inline w-4 h-4 mr-1"/>
                        <span>Palco Principal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
