import ScrollFadeIn from "./ScrollFadeIn";

export const Hero = () => {
   

    const goTo = () => {
        window.location.href = "#contact";
    }

    return (
        <section id="home" className="relative min-h-screen overflow-hidden">
            <div className="flex justify-center min-h-screen container mx-auto">
                <div className="flex flex-col items-center justify-center max-w-3xl px-6 pt-32 pb-20 z-10 space-y-4">
                    <ScrollFadeIn>
                        <h1 
                            
                            className="text-5xl md:text-6xl text-center font-bold leading-tight text-secondary-foreground"
                        >
                            We build websites that <span className="font-serif italic text-white">convert leads</span>
                        </h1>
                    </ScrollFadeIn>
                    <ScrollFadeIn delay={100}>
                        <p 
                            className="text-lg text-muted-foreground text-center"
                            
                        >
                            We design, develop and deliver awesome websites and web applications that helps you to start, grow & scale your business.
                        </p>
                    </ScrollFadeIn>
                    <ScrollFadeIn delay={200}>
                        <button 
                            className="relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-6 py-3 text-base"
                            onClick={ () => goTo()}
                        >
                            Lets build your website!
                        </button>
                    </ScrollFadeIn>
                    <ScrollFadeIn delay={300}>
                        <p 
                        className="text-sm text-muted-foreground"
                        >
                            We won’t stop working on your design until you’re 100% happy!
                        </p>
                    </ScrollFadeIn>
                </div>
            </div>

        </section>
    )
}