import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Blog | Esta es mi primera app",
    description: "Esta es solo una pagina de prubea en NextJS App",
};

const Blog = () => {
    return (
        <div className="bg-red-900 text-white text-center p-28">
            <h1>Blog Page</h1>

        </div>
    );
}

export default Blog;