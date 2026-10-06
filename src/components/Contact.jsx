import { useInView } from "../hooks/useInViews";
import { AlertCircle, CheckCircle, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "otomerqui@gmail.com",
    href: "mailto:otomerqui@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Barranquilla, CO",
    href: "#",
  },
];


export const Contact = () => {
    const [ref, isVisible] = useInView();

    const [formData,setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({
        type: null, // 'success' or 'error'
        message: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: ""});
        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                "EmailJS configuration is missing. Please check your environment variables."
                );
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully! I'll get back to you soon.",
            });
            setFormData({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS error:", error);
            setSubmitStatus({
                type: "error",
                message:
                error.text || "Failed to send message. Please try again later.",
            });
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container px-6 mx-auto max-w-6xl flex flex-wrap justify-between items-center mb-10">
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
                    <span className="inline-block mr-3 border-b border-primary/70 w-10 align-middle"></span><a href="mailto:info@enlawebpro.online">info@enlawebpro.online</a>
                </div>
            </div>
            {/* Form */}
            <div className="gap-12 max-w-3xl mx-auto px-6">
                <div className="glas p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label 
                                htmlFor="name" 
                                className="block text-base font-medium mb-2"
                            >
                                Name
                            </label>
                            <input 
                                id="name" 
                                type="text" 
                                required
                                placeholder="Your name"
                                value={formData.name}
                                onChange={ (e) => setFormData({...formData, name: e.target.value})}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"/>
                        </div>
                            <div>
                            <label 
                                htmlFor="email"                                     
                                className="block text-base font-medium mb-2"
                            >
                                Email
                            </label>
                            <input 
                                id="email" 
                                type="email"
                                required
                                placeholder="your@email.com"
                                value={formData.email}
                                onChange={ (e) => setFormData({...formData, email: e.target.value})}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                            />
                        </div>
                            <div>
                            <label 
                                htmlFor="message" 
                                className="block text-base font-medium mb-2"
                            >
                                Message
                            </label>
                            <textarea 
                                id="message" 
                                rows={5}
                                required
                                placeholder="Your message"
                                value={formData.message}
                                onChange={ (e) => setFormData({...formData, message: e.target.value})}
                                className="w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                            />
                        </div>
                        <button
                            className="w-full flex justify-center items-center gap-2 overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 px-6 py-3 text-lg" 
                            type="submit" 
                            size="lg" 
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <>
                                    Sending...                                        
                                </>
                            ) : (

                            
                            <>
                                Send Message 
                                <Send className="w-5 h-5"/>
                            </>
                            )
                            }
                        </button>
                        {submitStatus.type && (
                            <div
                            className={`flex items-center gap-3
                                p-4 rounded-xl ${
                                submitStatus.type === "success"
                                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                                }`}
                            >
                            {submitStatus.type === "success" ? (
                                <CheckCircle className="w-5 h-5 shrink-0" />
                            ) : (
                                <AlertCircle className="w-5 h-5 shrink-0" />
                            )}
                            <p className="text-sm">{submitStatus.message}</p>
                            </div>
                        )}
                    </form>
                    
                </div>               
            </div>
            
        </section>
    )
}