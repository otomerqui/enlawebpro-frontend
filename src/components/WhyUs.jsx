import { MessageSquare, ShieldCheck, Zap } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";


const highLights = [
    {
        icon: Zap,
        title: "Fast turnaround",
        description: "Delivering high-quality work quickly to keep your projects on schedule."

    },
    {
        icon: MessageSquare,
        title: "Easy communication",
        description: "Clear, responsive communication at every stage of your project."

    },
    {
        icon: ShieldCheck,
        title: "Top-notch quality",
        description: "Top-tier design and development that meet your standards."

    },
]

export const WhyUs = () => {
    
    return (
        <section id="whyus" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <ScrollFadeIn>
                    <h2 
                        className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground text-center"
                    >Why we are
                        <span className="font-serif italic font-normal text-white"> the right choice</span>
                    </h2>
                </ScrollFadeIn>
                <div className="space-y-4 text-muted-foreground mb-10">
                    <ScrollFadeIn delay={100}>
                        <p 
                            className="text-center"
                        >
                            Our expertise, creativity, and commitment to your success set us apart. Let us bring your vision to life.
                        </p>    
                    </ScrollFadeIn>                        
                </div>
                {/* Highlighs grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highLights.map( (highlight,idx) => (
                        <ScrollFadeIn key={idx} delay={(idx % 3) * 120} className="h-full">
                            <div                            
                                className="glass p-6 rounded-2xl h-full"                           
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <highlight.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                                <p className="text-sm text-muted-foreground">{highlight.description}</p>
                            </div>
                        </ScrollFadeIn>
                    ))}
                </div>

            </div>
        </section>
    )
}