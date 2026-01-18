"use client";

// imports do sistema
import Link from "next/link";
import { useState, useEffect } from "react";

// Importe dos icones do react icons
import { HiMenu } from "react-icons/hi";
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // função do menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 shadow-sm">
      <header
        className={`xl:px-40 relative p-4 w-full flex justify-between items-center transition-all duration-300 `}
      >
        <div className="flex items-center gap-2">
          <Link href="#home">
            {/* Logo */}
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg flex items-center justify-center bg-azul font-bold text-branco text-lg md:text-2xl">
              PML
            </div>
          </Link>
          <div>
            <Link href="#home">
              <h1 className="text-xl md:text-xl font-bold text-azul">
                Festival da Mandioca
              </h1>
            </Link>
            <Link
              href="https://lagarto.se.gov.br/"
              target="_blank"
              onClick={() => alert(
                "Você será redirecionado para o site da Prefeitura Municipal de Lagarto.",
              )}
            >
              <p className="text-xs md:text-base text-preto/60 transition-all duration-300 hover:scale-105 hover:text-azul">
                Prefeitura Municipal de Lagarto
              </p>
            </Link>
          </div>
        </div>
        <div className="lg:hidden flex justify-between items-center">
          <button
            className="cursor-pointer outline-none border-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <IoCloseCircleOutline className="w-5 h-5" />
            ) : (
              <HiMenu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* MobileMenu */}
        {isMobileMenuOpen && (
          <div className="absolute left-0 top-full w-full bg-branco shadow-md p-4 text-sm flex flex-col gap-4 border-t border-gray-300 z-50">
            <NavLink href="#home" label="Início" onClick={toggleMobileMenu} />
            <NavLink
              href="#programacao"
              label="Programação"
              onClick={toggleMobileMenu}
            />
            <NavLink
              href="#noticias"
              label="Notícias"
              onClick={toggleMobileMenu}
            />
            <NavLink href="#sobre" label="Sobre" onClick={toggleMobileMenu} />
            <NavLink
              href="#turismo"
              label="Turismo"
              onClick={toggleMobileMenu}
            />
            <NavLink
              href="#contato"
              label="Contato"
              onClick={toggleMobileMenu}
            />
          </div>
        )}

        {/* Desktop Menu */}
        <div className="hidden lg:flex justify-content itens-center gap-4 text-sm">
          <NavLink href="#home" label="Início" />
          <NavLink href="#programacao" label="Programação" />
          <NavLink href="#noticias" label="Notícias" />
          <NavLink href="#sobre" label="Sobre" />
          <NavLink href="#turismo" label="Turismo" />
          <NavLink href="#contato" label="Contato" />
        </div>
      </header>
    </div>
  );

  // Componentes rápidos
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
        className="text-preto hover:text-azul"
      >
        {label}
      </Link>
    );
  }
}
