export default function BlogLayout ( {children}: Readonly <
    {children: React.ReactNode}
>) {

    return(
        <>
            <div>
                Estoy en el blog
            </div>
            {children}
        </>

    )


}