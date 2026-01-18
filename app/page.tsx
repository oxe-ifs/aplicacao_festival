import Header from "@/components/Header";
import ProgramacaoCard from "@/components/ProgramacaoCard";

export default function Home() {
  return (
    <div>
      <Header />
      <section id="programacao" className="xl:px-40">
        <div className="text-center justify-between">
          <h1 className="text-3xl font-bold">Programação Oficial</h1>
          <p className="text-lg text-preto/60 text-balance">Confira toda a programação dos festejos juninos 2026</p>
        </div>
        <ProgramacaoCard />
      </section>
    </div>
  );
}
