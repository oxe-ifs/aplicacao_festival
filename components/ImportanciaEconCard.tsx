"use client";

type ImportanciaEconCardItem = {
    titulo: string;
    descricao: string;
}

// Simulando recebimento do banco / Precisa do back
const importanciaEcon: ImportanciaEconCardItem[] = [
    {
        titulo: "Geração de Emprego e Renda",
        descricao: "O festival atrai milhares de turistas, movimentando a economia local, com destaque para a criação de mais de mil empregos em edições recentes."
    },
    {
        titulo: "Movimentação do Comércio e Turismo",
        descricao: "A rede hoteleira, restaurantes e bares ficam lotados, e o comércio em geral é impulsionado, incluindo o Arraiá do Comércio."
    },
    {
        titulo: "Fortalecimento do Empreendedorismo",
        descricao: "O evento estreita laços entre o poder público e o setor privado, fomentando a economia criativa."
    },
    {
        titulo: "Projeção Regional e Nacional",
        descricao: "O festival coloca Lagarto no mapa turístico de Sergipe e do Brasil, com grande apelo de público para shows de artistas nacionais."
    }
];

function ImportanciaEconCard ({ importanciaEconItem }: { importanciaEconItem: ImportanciaEconCardItem }) {
    return (
        <div id="card" className="flex flex-col gap-4 p-6 border border-preto/20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"> 
            <h2 className="text-xl font-bold">{importanciaEconItem.titulo}</h2>
            <p className="text-preto/80">{importanciaEconItem.descricao}</p>
        </div>
    )
}

export default function ImportanciaEconDiv() {
    return (
        <div className="xl:px-15 md:px-10 px-6">
            <div className="grid md:grid-cols-2 gap-4 mt-8 p-4">
                {importanciaEcon.map((importanciaEconItem) => (
                    <ImportanciaEconCard importanciaEconItem={importanciaEconItem} key={importanciaEconItem.titulo} />
                ))}
            </div>
        </div>
    )
}