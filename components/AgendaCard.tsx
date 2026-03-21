"use client";

import { FiCalendar } from "react-icons/fi";

type AgendaCardItem = {
    titulo: string;
    descricao: string;
    data: string;
};

// Simulando recebimento do banco / Precisa do back
const Agenda: AgendaCardItem[] = [
    {
        titulo: "Madereta",
        descricao:
            "A 12ª Madereta de Lagarto, um dos maiores eventos culturais do Centro-Sul sergipano, ocorreu no dia 25 de janeiro de 2026. A festa é conhecida pela mistura de trios elétricos, artistas locais e nacionais, marcando o calendário cultural da região no início do ano com grande público.",
        data: "25 de janeiro de 2026",
    },
    {
        titulo: "Etapa do Campeonato Portal Vaquejada",
        descricao:
            "A etapa do Campeonato Portal Vaquejada (CPV) em Lagarto, Sergipe, é um dos eventos mais aguardados e prestigiados do Brasileirão da Vaquejada. Sediada no renomado Parque das Palmeiras, a competição é reconhecida pela excelente estrutura, alta premiação e por reunir os melhores vaqueiros e cavalos do país.",
        data: "14 a 19 de abril de 2026",
    },
    {
        titulo: "Lagarto Folia",
        descricao:
            "O Lagarto Folia é uma das maiores micaretas do interior de Sergipe, realizada no município de Lagarto. O evento celebra a emancipação política da cidade e funciona como um carnaval fora de época, reunindo trios elétricos, blocos e grandes nomes da música nacional. Além da festa, é um importante motor econômico que movimenta o turismo e o comércio local.",
        data: "18 e 19 de abril de 2026",
    },
    {
        titulo: "Festival da Mandioca",
        descricao:
            "O Festival da Mandioca em Lagarto, Sergipe, é uma das principais festas juninas do estado, valorizando a cultura local e a agricultura, criado em 2009 pelo ex-prefeito Valmir Monteiro. O evento celebra a mandioca, motor econômico regional, e inclui forró, cavalgadas e a tradicional Pega do Mastro.",
        data: "Entre maio e julho",
    },
];

function AgendaCard({ AgendaItem }: { AgendaItem: AgendaCardItem }) {
    return (
        <div
            className="flex flex-col gap-4 p-6 border border-preto/20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-branco w-full"
        >
            <h2 className="text-xl font-bold">{AgendaItem.titulo}</h2>
            <p className="text-preto/80">{AgendaItem.descricao}</p>
            <p className="text-md text-preto font-semibold"><FiCalendar className="inline mr-2" />{AgendaItem.data}</p>
        </div>
    );
}

function TimelineItem({ AgendaItem }: { AgendaItem: AgendaCardItem }) {
    return (
        <div className="relative flex gap-8">

            {/* Linha do tempo */}
            <div className="flex flex-col items-center">
                <span className="w-3 h-3 bg-preto rounded-full z-10"></span>
                <span className="w-px flex-1 bg-preto/30"></span>
            </div>

            {/* Card */}
            <AgendaCard AgendaItem={AgendaItem} />

        </div>
    );
}

export default function AgendaDiv() {
    return (
        <div className="xl:px-15 md:px-10 px-6">
            <div className="relative flex flex-col gap-12 mt-8 p-4">
                {Agenda.map((AgendaItem) => (
                    <TimelineItem
                        key={AgendaItem.titulo}
                        AgendaItem={AgendaItem}
                    />
                ))}
            </div>
        </div>
    );
}
