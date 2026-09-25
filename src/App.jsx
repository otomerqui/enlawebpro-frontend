import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Services } from "./components/Services";
import { Navbar } from "./layout/Navbar";
import { useEffect, useState } from "react";
import { getProjects } from "./api/project";
import { Footer } from "./layout/Footer";
import { WhyUs } from "./components/WhyUs";
import { Contact } from "./components/Contact";



function App() {
  const [projects,setProjects] = useState([]);

  useEffect(() => {
            async function loadData() {
            try {
                const [projectstsData] = await Promise.all([getProjects()]);
                setProjects(projectstsData);                
            } catch (err) {
                setLoadError('Could not load data. Is json-server running?');
            } 
            }
            loadData();
  }, []);

  return (
        
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects projects={projects}/>
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
