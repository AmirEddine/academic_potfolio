import Head from "next/head";
import React from "react";

const accueil = () => {
    return (<>
        <Head>
            <title>Accueil</title>
            <meta name="description" content="Je suis un développeur Web spécialisé dans la réalisation des sites web avec NextJS" />
            
            <meta property="og:title" content="Accueil" />
            <meta property="og:description" content="page d'accueil" />
            <meta property="og:image" content="http://localhost:3000/assets/logo.png" />
            
        </Head>
        <div className="w-full h-screen  text-center relative " >
            <div className="max-w-[1240px] w-full h-full flex mx-auto p-2 justify-center items-center ">
                <div >
                    <h1 className="text-white py-4 sm:text-lg" >Salut, je m&#39;appele <span>Amir</span></h1>
                    <h1 className="text-white py-2 sm:text-lg">Je suis un programmeur en informatique</h1>
                    <p className="text-gray-300 py-4 ">
                    Je suis compétent en développement d&#39;applications commerciales en utilisant des langages tels que Java,
                    C# et Visual, ainsi que pour l&#39;utilisation de réseaux locaux et la création 
                    d&#39;applications graphiques et web. Je possède également une solide compréhension 
                    des bases de données Microsoft SQL Server et MySQL</p>
                </div>
            </div>
        </div>
        </>)
}

export default accueil;