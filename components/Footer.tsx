"use client";

import { LuFacebook, LuInstagram, LuYoutube } from "react-icons/lu";

export default function Footer() {
    return (
        <footer id="contato" className="bg-azul-escuro text-branco mt-15 py-10 p-5">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto border-b border-branco/20 pb-10">
                <div>
                    <h3 className="text-lg font-semibold pb-4">Festival da Mandioca</h3>
                    <p className="text-branco/80">Celebrando a tradição e cultura nordestina através dos Festejos Juninos de Lagarto/SE.</p>
                    <div className="flex gap-4 mt-4">
                    <LuFacebook className="w-6 h-6 cursor-pointer hover:text-branco/80" />
                    <LuInstagram className="w-6 h-6 cursor-pointer hover:text-branco/80" />
                    <LuYoutube className="w-6 h-6 cursor-pointer hover:text-branco/80" />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold pb-4">Links Rápidos</h3>
                </div>
                <div>
                    <h3 className="text-lg font-semibold pb-4">Contato</h3>
                </div>
                <div>
                    <h3 className="text-lg font-semibold pb-4">Realização</h3>
                </div>
            </div>
            
        </footer>
    )
}