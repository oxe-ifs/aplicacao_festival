"use client"

// importe do link do next
import Link from "next/link";

// importe dos hooks do react
import {useState, useEffect} from "react"

// Importe dos icones do react icons
import { HiMenu } from "react-icons/hi"
import { IoCloseCircleOutline } from "react-icons/io5";

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // função do menu mobile
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    } 

    // Funções de Scroll do header
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        function onScroll() {
            setIsScrolled(window.scrollY > 10);
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <div className="sticky top-0 z-50 shadow-sm">
           <header
             className={`xl:px-40 relative p-4 w-full flex justify-between items-center transition-all duration-300 ${
                    isScrolled 
                        ? "bg-branco/60 backdrop-blur-md" 
                        : "bg-branco shadow-sm"
                }`}
           >
            <div className="flex items-center gap-2">
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg flex items-center justify-center bg-azul font-bold text-branco text-lg md:text-2xl">
                    PML
                </div>
                <div>
                    <h1 className="text-base md:text-xl font-bold text-azul">Festival da Mandioca</h1>
                    <p className="text-xs md:text-base text-preto/60">Prefeitura Municipal de Lagarto</p>
                </div>
            </div>
            <div className="lg:hidden flex justify-between items-center">
                <button className="cursor-pointer outline-none border-none" onClick={toggleMobileMenu}>
                    {isMobileMenuOpen ? (
                        <IoCloseCircleOutline className="w-5 h-5"/>
                    ) : (
                        <HiMenu className="w-5 h-5"/>
                    )}
                </button>
            </div>

            {/* MobileMenu */}
            {isMobileMenuOpen && (
                <div className="absolute left-0 top-full w-full bg-branco shadow-md p-4 flex flex-col gap-4 border-t border-gray-300 z-50">
                    <NavLink href="#home" label="Início" onClick={toggleMobileMenu} />
                    <NavLink href="#schedule" label="Programação" onClick={toggleMobileMenu} />
                    <NavLink href="#news" label="Notícias" onClick={toggleMobileMenu} />
                    <NavLink href="#about" label="Sobre" onClick={toggleMobileMenu} />
                    <NavLink href="#tourism" label="Turismo" onClick={toggleMobileMenu} />
                    <NavLink href="#contact" label="Contato" onClick={toggleMobileMenu} />
                </div>
            )}

            {/* Desktop Menu */}
            <div className="hidden lg:flex justify-content itens-center gap-4">
                    <NavLink href="#home" label="Início" onClick={toggleMobileMenu} />
                    <NavLink href="#schedule" label="Programação" onClick={toggleMobileMenu} />
                    <NavLink href="#news" label="Notícias" onClick={toggleMobileMenu} />
                    <NavLink href="#about" label="Sobre" onClick={toggleMobileMenu} />
                    <NavLink href="#tourism" label="Turismo" onClick={toggleMobileMenu} />
                    <NavLink href="#contact" label="Contato" onClick={toggleMobileMenu} />
            </div>
           </header>
        </div>
    )

    // funções auxiliares
    function NavLink({ 
        href, 
        label, 
        onClick,
    } : {
        href: string; 
        label: string;
        onClick?: () => void;
    }) {
        return <Link href={href} onClick={onClick} className="text-preto/60">{label}</Link>
    }
}