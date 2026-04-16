import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto | Esta es mi primera app",
  description: "Esta es solo una pagina de prubea en NextJS App",
};

const Contact = () => {
  return (
    <div className="bg-blue-900 text-white text-center p-28">
      <h1>Contact Page</h1>
    </div>
  );
}

export default Contact;