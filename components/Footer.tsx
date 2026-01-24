"use client";

import Link from "next/link";

import { LuFacebook, LuInstagram, LuYoutube, LuMail } from "react-icons/lu";
import { BsTelephone } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

export default function Footer() {
    return (
        <footer id="contato" className="bg-azul-escuro text-branco mt-15 p-10">
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto border-b border-branco/20 pb-10">
                <div className="xl:max-w-60">
                    <h3 className="text-lg font-semibold pb-4">Festival da Mandioca</h3>
                    <p className="text-branco/80">Celebrando a tradição e cultura nordestina através dos Festejos Juninos de Lagarto/SE.</p>
                    <div className="flex gap-4 mt-5">
                        <a href="#Facebook">
                            <LuFacebook className="w-6 h-6 cursor-pointer hover:text-branco/80" />
                        </a>
                        <a href="#Instagram">
                            <LuInstagram className="w-6 h-6 cursor-pointer hover:text-branco/80" />
                        </a>
                        <a href="#Youtube">
                            <LuYoutube className="w-6 h-6 cursor-pointer hover:text-branco/80" />
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold pb-4">Links Rápidos</h3>
                    <FooterLink href="#programacao" label="Programação" />
                    <FooterLink href="#noticias" label="Notícias" />
                    <FooterLink href="#sobre" label="Sobre" />
                    <FooterLink href="#turismo" label="Turismo" />
                </div>
                <div>
                    <h3 className="text-lg font-semibold pb-4">Contato</h3>
                    <p className="text-branco/80 mb-2"><BsTelephone className="inline mr-2 text-branco h-5 w-5" /> (00) 0000-0000</p>
                    <p className="text-branco/80 mb-2"><LuMail className="inline mr-2 text-branco h-5 w-5" /> email@email.se.gov.br</p>
                    <p className="text-branco/80 mb-2"><GrLocation className="inline mr-2 text-branco h-5 w-5" /> Local, Lagarto - SE</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold pb-4">Realização</h3>
                    <a
                        href="https://lagarto.se.gov.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-branco/80 hover:text-branco mb-2 block"
                    >
                        Prefeitura de Lagarto
                    </a>

                    <a
                        href="https://lagarto.se.gov.br/orgao/secretaria/secretaria-municipal-da-cultura"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-branco/80 hover:text-branco mb-2 block"
                    >
                        Secretaria de Cultura
                    </a>

                    <a
                        href="https://www.se.gov.br/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-branco/80 hover:text-branco mb-2 block"
                    >
                        Governo do Estado de Sergipe
                    </a>

                </div>
            </div>
            <div className="text-center max-w-7xl mx-auto mt-6 lg:flex lg:justify-between">
                <p className="text-sm text-branco/80 mt-2">© 2026 Prefeitura Municipal de Lagarto. Todos os direitos reservados.</p>
                <div className="mt-2">
                    <a href="#" className="text-sm text-branco/80 hover:text-branco p-2">Política de Privacidade</a>
                    <a href="#" className="text-sm text-branco/80 hover:text-branco p-2">Termos de Uso</a>
                </div>
            </div>
        </footer>
    )

    // Componentes rápidos
    function FooterLink({
        href,
        label,
        onClick,
        target,
    }: {
        href: string;
        label: string;
        onClick?: () => void;
        target?: string;
    }) {
        return (
            <Link
                href={href}
                onClick={onClick}
                target={target}
                className={`text-branco/80 hover:text-branco mb-2 block`}
            >
                {label}
            </Link>
        );
    }
}