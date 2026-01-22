"use client";

import { IconType } from "react-icons";
import { LuLeaf, LuTrophy } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";

type SobreCardItem = {
    titulo: string;
    descricao: string;
    icon: IconType;
}

// Simulando recebimento do banco / Precisa do back
const sobre: SobreCardItem[] = [
    {
        titulo: "Tradição Centenária",
        descricao: "Uma celebração que atravessa gerações, mantendo viva a cultura nordestina",
        icon: LuLeaf
    },
    {
        titulo: "Comunidade",
        descricao: "Reunindo famílias e visitantes em torno da alegria e da tradição junina",
        icon: GoPeople
    },
    {
        titulo: "Maior Festival",
        descricao: "O mais importante evento cultural de Lagarto e região",
        icon: LuTrophy

    },
    {
        titulo: "Cultura Viva",
        descricao: "Preservando e celebrando as raízes da cultura popular nordestina",
        icon: FaRegHeart
    }
];

function SobreCard ({ sobreItem }: { sobreItem: SobreCardItem }) {
    const Icon = sobreItem.icon;

    return (
        <div id="card" className="flex gap-4 p-6 border border-preto/20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <div className="flex h-12 w-12 p-4 items-center justify-center rounded-lg bg-azul/20">
                <Icon className="text-azul size={22}" />
            </div>
            <div>
                <h3 className="text-lg font-semibold text-preto">{sobreItem.titulo}</h3>
                <p className="mt-2 text-sm text-preto/70">{sobreItem.descricao}</p>
            </div>
        </div>
    )
}

export default function SobreSection() {
    return (
      <section className="xl:px-15 md:px-10 px-6">
        <div className="grid md:grid-cols-2 gap-4 mt-8 p-4">
            {sobre.map((sobreItem) => (
                <SobreCard sobreItem={sobreItem} key={sobreItem.titulo} />
            ))}
        </div>
      </section>
    )
}