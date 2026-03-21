"use client";

import Image from "next/image";

type PontoTuristicoItem = {
    titulo: string;
    descricao: string;
    imagem: string;
    categoria: "Histórico" | "Cultural" | "Praça" | "Patrimônio";
};

// Simulando recebimento do banco / Precisa do back
const PontosTuristicos: PontoTuristicoItem[] = [
    {
        titulo: "Santuário de Nossa Senhora da Piedade",
        descricao:
            "Principal símbolo religioso da cidade, localizada no centro histórico e marcada pela fé e tradição do povo lagartense.",
        imagem: "/imgs/Background/santuario_nossa_senhora_da_piedade-lg.jpg",
        categoria: "Patrimônio",
    },
    {
        titulo: "Barragem Dionísio de Araújo Machado",
        descricao:
            "A Barragem Dionísio de Araújo Machado é um dos principais atrativos naturais de Lagarto, com grande potencial turístico e de lazer à beira d’água. A orla e as margens da barragem têm projeto de infraestrutura para receber visitantes, proporcionando contato com a natureza e atividades ao ar livre.",
        imagem: "/imgs/turismo/centro-historico.jpg",
        categoria: "Histórico",
    },
    {
        titulo: "Praça Dr. Filomeno Hora",
        descricao:
            "A Praça Dr. Filomeno Hora é um espaço público tradicional no coração de Lagarto, ponto de encontro, convivência e lazer para moradores e visitantes. É um marco da vida urbana e social da cidade e costuma sediar eventos, feiras e atividades comunitárias ao ar livre.",
        imagem: "/imgs/turismo/praca-samuel.jpg",
        categoria: "Praça",
    },
    {
        titulo: "Parque das Palmeiras",
        descricao:
            "O Parque das Palmeiras, também conhecido como antiga Fazenda Bonfim, é um espaço com grande valor cultural e paisagístico, tradicional entre os locais. O nome faz referência ao conjunto de palmeiras que marca o local, combinando paisagem natural e importância histórica.",
        imagem: "/imgs/turismo/museu.jpg",
        categoria: "Cultural",
    },
];

function PontoTuristicoCard({ item }: { item: PontoTuristicoItem }) {
    return (
        <div className="flex flex-col bg-branco border border-preto/10 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
            <div className="relative w-full h-48">
                <Image
                    src={item.imagem}
                    alt={item.titulo}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="p-5 flex flex-col gap-2">
                <span className="text-sm font-semibold text-azul">
                    {item.categoria}
                </span>
                <h3 className="text-xl font-bold">
                    {item.titulo}
                </h3>
                <p className="text-preto/75 text-sm">
                    {item.descricao}
                </p>
            </div>
        </div>
    );
}

export default function TurismoSection() {
    return (
        <section id="pontos-turisticos" className="xl:px-40 mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                {PontosTuristicos.map((item) => (
                    <PontoTuristicoCard
                        key={item.titulo}
                        item={item}
                    />
                ))}
            </div>
        </section>
    );
}
