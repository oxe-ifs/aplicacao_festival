"use client";

type PatrimonioImateCardItem = {
    titulo: string;
    descricao: string;
}

// Simulando recebimento do banco / Precisa do back
const PatrimonioImate: PatrimonioImateCardItem[] = [
    {
        titulo: "Grupo Folclórico Parafusos",
        descricao: "Considerado uma expressão única no Brasil, este grupo folclórico de origem centenária é um símbolo de resistência afro-brasileira. Vestidos com anáguas brancas e pintados com tabatinga (barro branco), os integrantes realizam movimentos giratórios em 360 graus, remetendo à época da escravidão, quando criavam ilusões para despistar feitores."
    },
    {
        titulo: "Maniçoba de Lagarto",
        descricao: "Reconhecida oficialmente como Patrimônio Cultural Imaterial de Sergipe desde 2021. É um prato culinário tradicional, à base de folhas de mandioca, profundamente enraizado na cultura e no cotidiano lagartense."
    },
    {
        titulo: "Festival da Mandioca",
        descricao: "Este evento, que destaca a agricultura e a cultura local, é reconhecido como Patrimônio Cultural Imaterial de Sergipe. O festival celebra o ciclo da mandioca, base alimentar e econômica da região."
    },
    {
        titulo: "Vaquejadas",
        descricao: "Lagarto é conhecida como a Capital Nacional da Vaquejada, sendo esta prática um forte elemento cultural que movimenta a economia local e reforça os laços sociais e as tradições do homem nordestino. "
    }
];

function PatrimonioImateCard ({ PatrimonioImateItem }: { PatrimonioImateItem: PatrimonioImateCardItem }) {
    return (
        <div id="card" className="flex flex-col gap-4 p-6 border border-preto/20 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"> 
            <h2 className="text-xl font-bold">{PatrimonioImateItem.titulo}</h2>
            <p className="text-preto/80">{PatrimonioImateItem.descricao}</p>
        </div>
    )
}

export default function PatrimonioImateDiv() {
    return (
        <div className="xl:px-15 md:px-10 px-6">
            <div className="grid md:grid-cols-2 gap-4 mt-8 p-4">
                {PatrimonioImate.map((PatrimonioImateItem) => (
                    <PatrimonioImateCard PatrimonioImateItem={PatrimonioImateItem} key={PatrimonioImateItem.titulo} />
                ))}
            </div>
        </div>
    )
}