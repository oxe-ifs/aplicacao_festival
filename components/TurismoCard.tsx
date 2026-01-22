"use client";

import { IconType } from "react-icons";
import { LuUtensils, LuShoppingBag, LuCamera } from "react-icons/lu";
import { GrLocation } from "react-icons/gr";

type TurismoCardItem = {
    titulo: string;
    icon: IconType;
    itens: string[];
}

const turismo: TurismoCardItem[] = [
    {
        titulo: "Onde Comer",
        icon: LuUtensils,
        itens: [ 
            "Restaurante Sabor Nordestino - Comida típica sergipana", 
            "Casa da Mandioca - Especialidades em pratos regionais", 
            "Forró & Sabor - Gastronomia e música ao vivo", 
            "Barraca do João - Tapioca e cuscuz artesanais" 
        ]
    },
    {
        titulo: "Pontos Turísticos",
        icon: GrLocation,
        itens: [
            "Igreja Matriz de Nossa Senhora da Piedade",
            "Centro Histórico de Lagarto",
            "Praça Samuel de Oliveira",
            "Museu Municipal de Lagarto"
        ]
    },
    {
        titulo: "Artesanato Local",
        icon: LuShoppingBag,
        itens: [
            "Feira de Artesanato do Centro",
            "Cerâmica e Barro de Lagarto",
            "Renda e Bordado Tradicional",
            "Cestaria em Palha e Fibras"
        ]
    },
    {
        titulo: "Experiências",
        icon: LuCamera,
        itens: [
            "Tour pela Rota da Mandioca",
            "Oficinas de Quadrilha Junina",
            "Visita às Casas de Farinha",
            "Trilhas Ecológicas Rurais"
        ]
    }
]

function TurismoCard ({ turismoItem }: { turismoItem: TurismoCardItem }) {
    const Icon = turismoItem.icon;

    return (
        <div id="card" className="flex gap-4 p-6 border border-preto/20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex">
                <div className="flex h-12 w-12 p-4 items-center justify-center rounded-lg bg-azul/20">
                    <Icon className="text-azul" />
                </div>
                <h3 className="mx-4 mt-4 text-lg font-semibold">{turismoItem.titulo}</h3>
            </div>
        </div>
    )
}

export default function Turismosection() {
    return (
        <section className="mx-5 md:mx-10 lg:mx-30">
            <div className="grid md:grid-cols-2 gap-4 mt-8 p-4">
                {turismo.map((turismoItem) => (
                    <TurismoCard turismoItem={turismoItem} key={turismoItem.titulo} />
                ))}
            </div>
        </section>
    )
}