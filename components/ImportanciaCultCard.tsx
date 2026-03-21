"use client";

type ImportanciaCultCardItem = {
    titulo: string;
    descricao: string;
}

// Simulando recebimento do banco / Precisa do back
const importanciaCult: ImportanciaCultCardItem[] = [
    {
        titulo: "Identidade e Tradição",
        descricao: "O festival valoriza a cultura nordestina, a agricultura familiar e a mandioca como base alimentar, além de celebrar o São Pedro."
    },
    {
        titulo: "Patrimônio Imaterial",
        descricao: "Reconhecido como patrimônio cultural de Sergipe, o evento preserva tradições locais."
    },
    {
        titulo: "Valorização da Cultura Local",
        descricao: "Homenageia figuras históricas da cidade e promove artistas locais, fortalecendo a identidade de Lagarto."
    },
    {
        titulo: "Celebração e Diversidade",
        descricao: "Acontece no contexto dos festejos juninos, incluindo eventos tradicionais como a Pega do Mastro."
    }
];

function ImportanciaCultCard ({ importanciaCultItem }: { importanciaCultItem: ImportanciaCultCardItem }) {
    return (
        <div id="card" className="flex flex-col gap-4 p-6 border border-preto/20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"> 
            <h2 className="text-xl font-bold">{importanciaCultItem.titulo}</h2>
            <p className="text-preto/80">{importanciaCultItem.descricao}</p>
        </div>
    )
}

export default function ImportanciaCultDiv() {
    return (
        <div className="xl:px-15 md:px-10 px-6">
            <div className="grid md:grid-cols-2 gap-4 mt-8 p-4">
                {importanciaCult.map((importanciaCultItem) => (
                    <ImportanciaCultCard importanciaCultItem={importanciaCultItem} key={importanciaCultItem.titulo} />
                ))}
            </div>
        </div>
    )
}