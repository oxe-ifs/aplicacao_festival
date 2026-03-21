"use client";

import { FiShield, FiInfo, FiMapPin } from "react-icons/fi";

type AjudaVisitanteItem = {
    titulo: string;
    descricao: string;
    icon: React.ReactNode;
};

// Simulando recebimento do banco / Precisa do back
const AjudaVisitante: AjudaVisitanteItem[] = [
    {
        titulo: "Segurança",
        descricao: "Delegacia, Guarda Municipal e apoio emergencial.",
        icon: <FiShield />,
    },
    {
        titulo: "CEAC",
        descricao: "Serviços de documentação e atendimento ao cidadão.",
        icon: <FiInfo />,
    },
    {
        titulo: "Apoio ao Turista",
        descricao:
            "Pontos informativos, serviços públicos e locais de apoio.",
        icon: <FiMapPin />,
    },
];

function InfoCard({ item }: { item: AjudaVisitanteItem }) {
    return (
        <div className="flex gap-3 items-start">
            <span className="text-2xl text-azul mt-1">
                {item.icon}
            </span>
            <div>
                <h3 className="font-semibold text-lg">
                    {item.titulo}
                </h3>
                <p className="text-preto/70 text-sm">
                    {item.descricao}
                </p>
            </div>
        </div>
    );
}

function MapaCard() {
    return (
        <div className="w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden shadow-md">
            <iframe
                src="https://www.google.com/maps?q=Lagarto+SE&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                className="border-0"
            />
        </div>
    );
}

export default function AjudaVisitanteSection() {
    const mapsLink =
        "https://www.google.com/maps/search/?api=1&query=Lagarto+SE";

    return (
        <section id="ajuda-visitante" className="xl:px-40 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-6">
                <MapaCard />
                <div className="bg-branco rounded-lg shadow-md p-6 flex flex-col justify-between">
                    <div className="space-y-6 text-left">
                        {AjudaVisitante.map((item) => (
                            <InfoCard
                                key={item.titulo}
                                item={item}
                            />
                        ))}
                    </div>

                    <a
                        href={mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 text-center w-full py-3 rounded-md border border-azul text-azul font-semibold hover:bg-azul hover:text-branco transition-all"
                    >
                        Abrir no Google Maps
                    </a>
                </div>
            </div>
        </section>
    );
}
