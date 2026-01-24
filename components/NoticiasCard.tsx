"use client";

import Image from "next/image";

import { FiCalendar } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa6";

type NoticiaItem = {
  titulo: string;
  resumo: string;
  data: string;
  imagemUrl: string;
  tipo?: string;
};

// Simulando recebimento do banco / Precisa do back
const noticias: NoticiaItem[] = [
  {
    titulo: "Programação Oficial Divulgada",
    resumo: "Confira todas as atrações confirmadas para os Festejos Juninos 2025, incluindo shows, quadrilhas e festivais gastronômicos.",
    data: "10 de Maio, 2026",
    imagemUrl: "/imgs/imgnot1.jpg",
    tipo: "Anúncio",
  },
  {
    titulo: "Inscrições Abertas para Concurso de Quadrilhas",
    resumo: "Grupos juninos de toda a região podem se inscrever até 1º de junho. Premiação total de R$ 30 mil.",
    data: "15 de Maio, 2026",
    imagemUrl: "/imgs/imgnot2.jpg",
    tipo: "Cultura",
  },
  {
    titulo: "Festival Gastronômico terá 40 Expositores",
    resumo: "Conheça os pratos típicos à base de mandioca que estarão disponíveis durante o festival.",
    data: "20 de Maio, 2026",
    imagemUrl: "/imgs/imgnot3.jpg",
    tipo: "Gastronomia",
  },
];

function NoticiaCard({ noticia }: { noticia: NoticiaItem }) {
    return (
      <div
      id="card"
      className="group py-6 border border-preto/20 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
      >
        <div className="relative">
          <Image
            className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
            src={noticia.imagemUrl}
            width={150}
            height={100}
            alt={noticia.titulo}
          />
          <span className="absolute top-4 left-4 bg-azul text-branco text-sm font-medium px-3 py-1 rounded-md">
            {noticia.tipo}
          </span>
        </div>
        <div className="text-preto/80 text-sm text-justify my-2 mx-4">
            <p><FiCalendar className="inline" /> {noticia.data}</p>
        </div>
        <div id="card-title" className="text-xl font-semibold my-2 mx-4 group-hover:text-azul">
            <h2>{noticia.titulo}</h2>
        </div>
        <div className="text-md text-preto/80 my-2 mx-4">
            <p>{noticia.resumo}</p>
        </div>
        <a href="#" className="flex text-sm text-azul font-semibold m-4 p-1 max-w-25 hover:bg-azul-escuro hover:text-branco rounded-md">Ver mais <FaArrowRight className="mx-2"/></a>
      </div>
    )
}

export default function NoticiasSection() {
    return (
    <section id="noticias" className="xl:px-15 md:px-10 px-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 p-4">
        {noticias.map((noticia) => (
          <NoticiaCard key={noticia.titulo} noticia={noticia} />
        ))}
      </div>
    </section>
    );
}