import { Brush, Code2, MonitorPc, Paintbrush, Smartphone } from "lucide-react";
import { useInView } from "../hooks/useInViews";

const services = [
    {
        icon: Paintbrush,
        title: "Website Design",
        description: "Get a custom website that’s visually stunning and highly functional, tailored to reflect your brand and drive engagement."

    },
    {
        icon: Code2,
        title: "Web Development",
        description: "Leverage custom development to create a responsive, scalable website that’s easy to manage and optimized for search engines."

    },
    {
        icon: Brush,
        title: "Website Revamp",
        description: "Refresh your outdated site with a modern design and improved user experience to better align with your brand’s goals."

    },
    {
        icon: Smartphone,
        title: "Mobile App",
        description: "We develop a web application to help you productively manage and run your business."

    },
    {
        icon: MonitorPc,
        title: "Ongoing Support",
        description: "Continuous improvements, updates and optimizations to keep your website performing at its best."

    },
    
]

export const Services = () => {
    const [ref, isVisible] = useInView();

    return (
        <section id="services" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <h2 
                    ref={ref} 
                    className={`text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground text-center fade-in ${isVisible ? 'visible' : ''}`}
                >
                    Solutions that
                    <span className="font-serif italic font-normal text-white"> fit your vision</span>
                </h2>
                <div className="space-y-4 text-muted-foreground mb-10">
                    <p 
                        ref={ref} 
                        className={`text-center fade-in ${isVisible ? 'visible' : ''}`}
                    >
                        We offer everything you need to thrive online. Explore our services and see how we can help you achieve your goals.
                    </p>                            
                </div>
                {/* Services grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map( (service,idx) => (
                        <div 
                            key={idx}
                            ref={ref}  
                            className={`glass p-6 rounded-2xl fade-in ${isVisible ? 'visible' : ''}`}
                            style={{transitionDelay: `${(idx + 1)*100}ms`}}
                        >
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                <service.icon className="w-6 h-6 text-primary"/>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                            <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}