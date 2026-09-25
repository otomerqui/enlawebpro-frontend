import { useInView } from "../hooks/useInViews";

export const Contact = () => {
    const [ref, isVisible] = useInView();

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container px-6 mx-auto max-w-6xl flex justify-between items-center">
                <div>
                    <h2 
                        ref={ref} 
                        className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground fade-in ${isVisible ? 'visible' : ''}`}
                    >
                        Need Any Help?
                    <span className="font-serif italic font-normal text-white">Say hello</span>
                    </h2>
                    <p 
                        ref={ref} 
                        className={`text-muted-foreground fade-in ${isVisible ? 'visible' : ''}`}
                    >
                        Have a project in mind or need help with WordPress?<br /> Send me a message and I’ll get back to you shortly.
                    </p>
                </div>
                <div ref={ref} className={`fade-in ${isVisible ? 'visible' : ''}`}>
                    <span className="inline-block mr-3 border-b border-black/30 w-10 align-middle"></span><a href="mailto:info@enlawebpro.online">info@enlawebpro.online</a>
                </div>

            </div>
        </section>
    )
}