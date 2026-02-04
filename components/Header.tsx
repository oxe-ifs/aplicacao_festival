"use client";

// imports do sistema
import Link from "next/link";
import { useState, useEffect } from "react";

// Importe dos icones do react icons
import { HiMenu } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
      <div className="sticky top-0 z-50">
        <header
            className={`transition-all duration-300 w-full flex justify-between items-center p-4 
          /* Padding lateral que cresce com a tela */
          px-4 md:px-10 lg:px-12 xl:px-32 
          ${isScrolled ? "bg-branco/80 backdrop-blur-md shadow-md" : "bg-branco shadow-sm"}`}
        >
          <Link href="#home">
            <div className="flex items-center gap-2 shrink-0"> {/* shrink-0 impede o logo de espremer */}
              <div className="w-10 h-10 md:w-12 rounded-lg flex items-center justify-center bg-azul font-bold text-branco text-lg md:text-xl">
                PML
              </div>
              <div className="hidden sm:block"> {/* Esconde o texto em telas muito pequenas se necessário */}
                <h1 className="text-lg font-bold text-azul leading-tight">
                  Veja Lagarto
                </h1>
                <p className="text-[10px] md:text-xs text-preto/60">
                  Descubra mais sobre Lagarto
                </p>
              </div>
            </div>
          </Link>

          {/* Mobile Menu Button - Agora aparece em telas 'lg' também para evitar quebra */}
          <div className="lg:hidden flex items-center">
            <button
                className="cursor-pointer outline-none p-2 text-azul"
                onClick={toggleMobileMenu}
                aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                  <IoCloseCircleOutline className="w-7 h-7" />
              ) : (
                  <HiMenu className="w-7 h-7" />
              )}
            </button>
          </div>

          {/* Desktop Menu - Otimizado para telas médias */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-4">
            <NavLink href="#home" label="Início" />
            <NavLink href="#cultura" label="Cultura" />
            <NavLink href="#mandioca" label="Festival" /> {/* Texto reduzido */}
            <NavLink href="#agenda" label="Agenda" /> {/* Texto reduzido */}
            <NavLink href="#turismo" label="Turismo" /> {/* Texto reduzido */}
            <NavLink href="#informacoes" label="Ajuda" /> {/* Texto reduzido */}
            <NavLink href="#galeria" label="Galeria" />
            <NavLink href="#quem_somos" label="Quem Somos" />
          </nav>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
              <div className="absolute left-0 top-full w-full bg-branco shadow-xl p-6 flex flex-col gap-4 border-t border-gray-100 lg:hidden animate-in slide-in-from-top duration-300">
                <NavLink href="#home" label="Início" onClick={toggleMobileMenu} />
                <NavLink href="#cultura" label="Cultura" onClick={toggleMobileMenu} />
                <NavLink href="#mandioca" label="Festival da Mandioca" onClick={toggleMobileMenu} />
                <NavLink href="#agenda" label="Agenda de Shows" onClick={toggleMobileMenu} />
                <NavLink href="#turismo" label="Pontos Turísticos" onClick={toggleMobileMenu} />
                <NavLink href="#informacoes" label="Ajuda ao Visitante" onClick={toggleMobileMenu} />
                <NavLink href="#galeria" label="Galeria" onClick={toggleMobileMenu} />
                <NavLink href="#quem_somos" label="Quem Somos" onClick={toggleMobileMenu} />
              </div>
          )}
        </header>
      </div>
  );

  function NavLink({
                     href,
                     label,
                     onClick,
                   }: {
    href: string;
    label: string;
    onClick?: () => void;
  }) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className="text-preto hover:text-azul px-2 py-1 transition-colors font-medium text-sm whitespace-nowrap"
        >
          {label}
        </Link>
    );
  }
}