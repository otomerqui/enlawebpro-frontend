

const footerLinks = [
    {href: "#home", label: "Home"},
    {href: "#services", label: "Services"},
    {href: "#projects", label: "Projects"},
    {href: "#whyus", label: "Why US"},
];


export const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="py-12 border-t border-border">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto mb-8 flex flex-col items-center">
                    <img
                        src="/logo-enlawebpro.webp"
                        className="w-25 h-25 mb-4"
                    />
                    <p className="text-center text-muted-foreground text-lg">Your business is ready to make waves, and we’re here to help. Transform bold ideas into a powerful online presence.</p>

                </div>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">                        
                        <p className="text-sm text-muted-foreground mt-2">
                        © {currentYear} En La Web Pro. All rights reserved.
                        </p>
                    </div>

                    {/* Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {link.label}
                        </a>
                        ))}
                    </nav>               
                </div>
                
            </div>
        </footer>
     )
}