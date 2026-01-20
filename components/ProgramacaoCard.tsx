"use client";

import { FiCalendar } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";

type ProgramacaoItem = {
  horario: string;
  tipo: string;
  titulo: string;
  local: string;
  badgeClassName: string;
};

type ProgramacaoDia = {
  data: string;
  diaSemana: string;
  itens: ProgramacaoItem[];
};

// Simulando recebimento do banco / Precisa do back
const programacao: ProgramacaoDia[] = [
  {
    data: "13 de Junho",
    diaSemana: "Quinta-Feira",
    itens: [
      {
        horario: "19h00",
        tipo: "Cerimônia",
        titulo: "Abertura Oficial",
        local: "Praça Central",
        badgeClassName: "bg-azul-escuro text-branco",
      },
      {
        horario: "20h00",
        tipo: "Show",
        titulo: "Show de Forró com Trio Nordestino",
        local: "Palco Principal",
        badgeClassName: "bg-azul text-branco",
      },
      {
        horario: "22h30",
        tipo: "Apresentação",
        titulo: "Quadrilha Junina Matuta",
        local: "Palco Principal",
        badgeClassName: "bg-azul/15",
      },
    ],
  },
  {
    data: "14 de Junho",
    diaSemana: "Sexta-Feira",
    itens: [
      {
        horario: "18h00",
        tipo: "Gastronomia",
        titulo: "Festival Gastronômico da Mandioca",
        local: "Pavilhão de Alimentação",
        badgeClassName: "bg-azul/80 text-branco",
      },
      {
        horario: "21h00",
        tipo: "Concurso",
        titulo: "Concurso de Quadrilhas",
        local: "Palco Principal",
        badgeClassName: "bg-azul-escuro text-branco",
      },
      {
        horario: "23h00",
        tipo: "Atração",
        titulo: "Show Pirotécnico",
        local: "Praça Central",
        badgeClassName: "bg-azul/70 text-branco",
      },
    ],
  },
  {
    data: "15 de Junho",
    diaSemana: "Sábado",
    itens: [
      {
        horario: "16h00",
        tipo: "Feira",
        titulo: "Feira de Artesanato",
        local: "Área de Exposições",
        badgeClassName: "bg-azul/15",
      },
      {
        horario: "20h00",
        tipo: "Cultura",
        titulo: "Apresentação Cultural",
        local: "Palco Secundário",
        badgeClassName: "bg-azul/70 text-branco",
      },
      {
        horario: "22h00",
        tipo: "Show",
        titulo: "Grande Show de Encerramento",
        local: "Palco Principal",
        badgeClassName: "bg-azul text-branco",
      },
    ],
  },
];

function ProgramacaoCard({ dia }: { dia: ProgramacaoDia }) {
  return (
    <div
      id="card"
      className="py-6 border border-preto/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <div
        id="card-header"
        className="bg-azul/15 justify-between flex items-center px-4 py-2 mb-4"
      >
        <div>
          <h1 data-slot="card-title" className="text-lg font-semibold">
            {dia.data}
          </h1>
          <p className="text-preto/60">{dia.diaSemana}</p>
        </div>
        <FiCalendar className="w-6 h-6 text-azul" />
      </div>

      <div data-slot="card-content" className="pt-4 px-4">
        <div className="space-y-4">
          {dia.itens.map((item, idx) => (
            <div key={idx} className="border-l-2 border-azul pl-4 py-2">
              <div className="flex items-start gap-3">
                <FaRegClock className="inline w-4 h-4 mr-2" />
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <p className="font-semibold text-sm">{item.horario}</p>
                    <p
                      className={`${item.badgeClassName} px-2 py-1 rounded text-xs font-semibold`}
                    >
                      {item.tipo}
                    </p>
                  </div>

                  <p className="font-medium">{item.titulo}</p>

                  <div className="flex items-center gap-2 text-sm text-preto/60">
                    <GrLocation className="inline w-4 h-4 mr-1" />
                    <span>{item.local}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProgramacaoSection() {
  return (
    <section id="programacao" className="xl:px-15 px-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-4">
        {programacao.map((dia) => (
          <ProgramacaoCard key={dia.data} dia={dia} />
        ))}
      </div>
    </section>
  );
}
