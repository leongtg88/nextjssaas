import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Esta es mi primera app",
  description: "Esta es solo una pagina de prubea en NextJS App",
};



const About = () => {
    return (
        <div className="bg-slate-900 text-white text-center p-28">  
            <h1>About Page</h1>
        </div>
    );
    
}
export default About;