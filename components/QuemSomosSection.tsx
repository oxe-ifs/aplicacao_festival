"use client";

import Image from "next/image";

type QuemSomosItem = {
    nome: string;
    cargo: string;
    imagem: string;
};

// Simulando recebimento do banco / Precisa do back
const QuemSomos: QuemSomosItem[] = [
    {
        nome: "Rosana Siqueira",
        cargo: "Professora Orientadora",
        imagem: "/imgs/equipe/rosana.jpg",
    },
    {
        nome: "José Herbert",
        cargo: "Desenvolvedor",
        imagem: "/imgs/equipe/jose-herbert.jpg",
    },
    {
        nome: "Guilherme da Invenção",
        cargo: "Desenvolvedor",
        imagem: "/imgs/equipe/guilherme.jpg",
    },
    {
        nome: "Vinicius Santos",
        cargo: "Designer",
        imagem: "/imgs/equipe/vinicius.jpg",
    },
];

function QuemSomosCard({ item }: { item: QuemSomosItem }) {
    return (
        <div className="flex flex-col items-center gap-4 p-6 bg-branco border border-preto/10 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="w-28 h-28 rounded-full overflow-hidden bg-preto/5">
                <Image
                    src={item.imagem}
                    alt={item.nome}
                    width={112}
                    height={112}
                    className="object-cover w-full h-full"
                />
            </div>

            <div className="text-center">
                <h3 className="text-lg font-bold">{item.nome}</h3>
                <p className="text-preto/70">{item.cargo}</p>
            </div>
        </div>
    );
}

export default function QuemSomosSection() {
    return (
        <section id="quem-somos" className="xl:px-40 mt-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
                {QuemSomos.map((item) => (
                    <QuemSomosCard
                        key={item.nome}
                        item={item}
                    />
                ))}
            </div>
        </section>
    );
}

