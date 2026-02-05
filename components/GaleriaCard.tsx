"use client";

import Image from "next/image";

type GaleriaItem = {
  descricao: string;
  imagemUrl: string;
};

// Simulando recebimento do banco / Precisa do back
const galeria: GaleriaItem[] = [
  {
    descricao: "Cordel Nordestino em Lagarto",
    imagemUrl: "/imgs/Background/cordel-lg.jpg",
  },
  {
    descricao: "Imagem de Nossa Senhora da Piedade",
    imagemUrl: "/imgs/Background/nossa_senhora_da_piedade-lg.jpg",
  },
  {
    descricao: "Santuário Nossa Senhora da Piedade",
    imagemUrl: "/imgs/Background/santuario_nossa_senhora_da_piedade-lg.jpg",
  },
  {
    descricao: "Palco do Festival de Mandioca",
    imagemUrl: "/imgs/Background/palco_festival-lg.jpg",
  },
  {
    descricao: "Praça da Fonte em Lagarto",
    imagemUrl: "/imgs/Background/praca_da_fonte-lg.jpg",
  },
  {
    descricao: "Monumento aos Parafusos",
    imagemUrl: "/imgs/parafuso.jpg",
  },
];

function GaleriaCard({ galeria }: { galeria: GaleriaItem }) {
  return (
    <div
      id="card"
      className="group py-6 border border-preto/20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* container relativo */}
      <div className="relative">
        <Image
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
          src={galeria.imagemUrl}
          width={150}
          height={100}
          alt={galeria.descricao}
        />

        {/* texto sobre a imagem */}
        <div className="absolute bottom-3 left-3 z-10">
          <p className="text-branco-escuro text-sm font-medium drop-shadow">
            {galeria.descricao}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function GaleriaSection() {
    return (
      <section id="galeria" className="xl:px-15 md:px-10 px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-4">
        {galeria.map((galeria) => (
          <GaleriaCard key={galeria.descricao} galeria={galeria} />
        ))}
      </div>
    </section>
    )
}