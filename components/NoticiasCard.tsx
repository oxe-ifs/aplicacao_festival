"use client";

import Image from "next/image";

import { FiCalendar } from "react-icons/fi";

type NoticiaItem = {
  titulo: string;
  resumo: string;
  data: string;
  imagemUrl: string;
};

// Simulando recebimento do banco / Precisa do back
const noticias: NoticiaItem[] = [
  {
    titulo: "Programação Oficial Divulgada",
    resumo: "Confira todas as atrações confirmadas para os Festejos Juninos 2025, incluindo shows, quadrilhas e festivais gastronômicos.",
    data: "10 de Maio, 2026",
    imagemUrl: "/imgs/imgnot1.jpg",
  },
  {
    titulo: "Inscrições Abertas para Concurso de Quadrilhas",
    resumo: "Grupos juninos de toda a região podem se inscrever até 1º de junho. Premiação total de R$ 30 mil.",
    data: "15 de Maio, 2026",
    imagemUrl: "/imgs/imgnot2.jpg",
  },
  {
    titulo: "Festival Gastronômico terá 40 Expositores",
    resumo: "Conheça os pratos típicos à base de mandioca que estarão disponíveis durante o festival.",
    data: "20 de Maio, 2026",
    imagemUrl: "/imgs/imgnot3.jpg",
  },
];

function NoticiaCard({ noticia }: { noticia: NoticiaItem }) {
    return (
      <div
      id="card"
      className="py-6 border border-preto/20 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
      >
        <div className="text-preto/80 my-2 mx-4 text-justify">
            <p><FiCalendar className="inline" /> {noticia.data}</p>
        </div>
        <div className="text-md font-semibold text-balance my-2 mx-4">
            <h2>{noticia.titulo}</h2>
        </div>
        <div className="text-sm text-balance my-2 mx-4">
            <p>{noticia.resumo}</p>
        </div>
      </div>
    )
}

export default function NoticiasSection() {
    return (
    <section id="programacao" className="xl:px-15 px-10">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-4">
        {noticias.map((noticia) => (
          <NoticiaCard key={noticia.titulo} noticia={noticia} />
        ))}
      </div>
    </section>
    );
}