import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Esta es mi primera app",
  description: "Esta es solo una pagina de prubea en NextJS App",
};

const Projects = () => {
    return (
        <div className="bg-orange-900 text-white text-center p-28">  
            <h1>Projects Page</h1>
        </div>
    );
}

export default Projects;