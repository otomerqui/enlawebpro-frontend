import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import ScrollFadeIn from "./ScrollFadeIn";
import { useState } from "react";




export const Projects = ({projects}) => {
   
    const [activeIdx,setActiveIdx] = useState(0);
    
    const next = () => {
        setActiveIdx( (prev) => (prev + 1) % projects.length );
    }

    const previous = () => {
        setActiveIdx( (prev) => (prev - 1 + projects.length) % projects.length );
    }

   
    
    
    
    return (
      <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
            {projects.length >0 && (<div className="container mx-auto px-6 relative z-10">
                <ScrollFadeIn>
                    <h2 
                        className="text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground text-center"
                    >
                        Projects that
                        <span className="font-serif italic font-normal text-white"> make an impact</span>
                    </h2>
                </ScrollFadeIn>
                <div className="space-y-4 text-muted-foreground mb-10">
                    <ScrollFadeIn delay={100}>
                        <p 
                            className="text-center"
                        >
                            Checkout our recently completed projects.
                        </p>       
                    </ScrollFadeIn>                     
                </div>
                {/* Projects carousel */}
                <ScrollFadeIn delay={200}>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            {/*Main Project */}
                            <div className="glass rounded-3xl glow-border group">
                                {/* Image */}
                                <div className="relative overflow-hidden rounded-t-3xl">
                                    <img 
                                        className="w-full max-h-70 md:max-h-100 object-cover transition-transform duration-700 group-hover:scale-110"
                                        src={projects[activeIdx]._embedded['wp:featuredmedia'][0].source_url} 
                                        alt={projects[activeIdx].title.rendered} 
                                    />  
                                                            
                                    <div
                                        className="absolute inset-0 
                                        bg-linear-to-t from-card via-card/50
                                        to-transparent opacity-60"
                                    />
                                    {/*Overlay Link */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <a href={projects[activeIdx].acf.project_url} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all" target="_blank">
                                            <ArrowRight className="w-5 h-5"/>
                                        </a>                                   
                                    </div>
                                
                                </div>
                                {/*Content */}
                                <div className="p-6 space-y-4">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors"><a href={projects[activeIdx].acf.project_url} target="_blank">{projects[activeIdx].title.rendered}</a></h3>
                                        <ArrowUpRight 
                                            className="w-5 h-5 
                                            text-muted-foreground group-hover:text-primary
                                            group-hover:translate-x-1 
                                            group-hover:-translate-y-1 transition-all"
                                        />
                                    </div>
                                    <p className="text-muted-foreground text-sm"></p>
                                    
                                </div>                           
                            </div>
                            {/*Testimonials navigation  */}
                            <div className="flex items-center justify-center gap-4 mt-8">
                                    <button 
                                    className="p-1 md:p-3 rounded-full glass hover:bg-primary/10 text-primary transition-all"
                                    onClick={previous}
                                    >
                                    <ChevronLeft />
                                    </button>

                                    <div className="flex gap-2">
                                    {projects.map((_, idx) => (
                                        <button 
                                        key={idx}
                                        onClick={ () => setActiveIdx(idx)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`}
                                        />
                                    ))}
                                    </div>

                                    <button 
                                    className="p-1 md:p-3 rounded-full glass hover:bg-primary/10 text-primary transition-all"
                                    onClick={next}
                                    >
                                    <ChevronRight />
                                    </button>
                            </div>
                        </div>

                    </div>
                </ScrollFadeIn>

            </div>)}
                

           
        </section>
    )
}