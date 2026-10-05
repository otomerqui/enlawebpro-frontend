import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
    {href: "#home", label: "Home"},
    {href: "#services", label: "Services"},
    {href: "#projects", label: "Projects"},
    {href: "#whyus", label: "Why US"},   
]

const navLinksMobile = [
    {href: "#home", label: "Home"},
    {href: "#services", label: "Services"},
    {href: "#projects", label: "Projects"},
    {href: "#whyus", label: "Why US"},
    {href: "#contact", label: "Contact Us"},   
]


export const Navbar = () => {
    const [isMobileMenuOpen,setIsMobileMenuOpen] = useState(false);
    const [isScrolled,setIsScrolled] = useState(false);
    const [isActive,setIsActive] = useState(false);

    useEffect( () => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        }
        window.addEventListener("scroll", handleScroll );

        return () => window.removeEventListener("scroll", handleScroll );
    }, []);

    useEffect( () =>  {
        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                setIsActive(entry.target.id);
                }
            });
            },
            {
            threshold: 0.5,
            }
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    const goTo = () => {
        window.location.href = "#contact";
    }

    return (
        <header className="fixed top-0 left-0 right-0 bg-transparent py-0 lg:py-3 px-0 lg:px-6 z-50">
            <nav className={`mx-auto border-none px-6 py-1 flex items-center justify-between transition-all duration-200 ${isScrolled ? "max-w-full lg:max-w-4xl glass rounded-none lg:rounded-full" : "max-w-5xl"}`}>
                <a href="#" className="text-xl font-bold tracking-tight hover:text-primary">
                    En La Web Pro<span className="text-primary">.</span>
                </a>
                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-1">
                    <div className="rounded-full px-2 py-1 flex items-center gap-1">
                        {navLinks.map( (link, idx) => (
                            <a key={idx} className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full cursor-pointer" href={link.href}>{link.label}
                             <span className={`absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full transition-all duration-300 bg-green-400  hidden md:block ${isActive === link.href.replace("#", "") ? "opacity-100" : "opacity-0"}`}></span>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Contact CTA button */}
                <div className="hidden lg:block">
                    <button 
                        className="relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-6 py-2 text-base"
                        onClick={() => goTo()}
                    >
                        Contact
                    </button>
                </div>

                {/* Mobile Menu button */}
                <button 
                    className="lg:hidden p-2 text-foreground cursor-pointer"
                    onClick={ () => setIsMobileMenuOpen( (prev) => !prev)}
                >
                    <Menu size={24}/>
                </button>
            </nav>

            {/*Mobile Menu */}
            {isMobileMenuOpen && 
                <div className="lg:hidden glass animate-fade-in">
                    <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
                        {navLinksMobile.map( (link, index) => (
                            <a 
                                href={link.href} 
                                key={index} 
                                onClick={ () => setIsMobileMenuOpen(false)}
                                className="tex-lg text-muted-foreground hover:text-foreground py-2"
                            >
                                {link.label}
                            </a>
                        ))} 
                                           
                    </div>
                </div>
            }
            
        </header>
    )
}