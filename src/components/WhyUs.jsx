import { MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { useInView } from "../hooks/useInViews";


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
    const [ref, isVisible] = useInView();
    return (
        <section id="whyus" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <h2 
                    ref={ref} 
                    className={`text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground text-center fade-in ${isVisible ? 'visible' : ''}`}
                >Why we are
                    <span className="font-serif italic font-normal text-white"> the right choice</span>
                </h2>
                <div className="space-y-4 text-muted-foreground mb-10">
                    <p 
                        ref={ref} 
                        className={`text-center fade-in ${isVisible ? 'visible' : ''}`}
                    >
                        Our expertise, creativity, and commitment to your success set us apart. Let us bring your vision to life.
                    </p>                            
                </div>
                {/* Highlighs grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {highLights.map( (highlight,idx) => (
                        <div 
                            key={idx} 
                            ref={ref}
                            className={`glass p-6 rounded-2xl fade-in ${isVisible ? 'visible' : ''}`}
                            style={{transitionDelay: `${(idx + 1)*100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <highlight.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                            <p className="text-sm text-muted-foreground">{highlight.description}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}