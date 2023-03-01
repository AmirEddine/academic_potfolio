import React from 'react'
import Gallery from '../components/Gallery';
import Projet_2_img_1 from '../public/assets/Projet_2_img_1.png';
import Projet_2_img_2 from '../public/assets/Projet_2_img_2.png';
import Projet_2_img_3 from '../public/assets/Projet_2_img_3.png';
import Projet_2_img_4 from '../public/assets/Projet_2_img_4.png';
import Head from "next/head";

export const projet_2 = () => {
    const slides = [
        {
            url: Projet_2_img_1.src
        },
        {
            url: Projet_2_img_2.src
        },
        {
            url: Projet_2_img_3.src
        },
        {
            url: Projet_2_img_4.src
        }
    ];
    return (<>
        <Head>
            <title>Projet 2 - Portfolio</title>
            <meta name="description" content="le projet 2 du portfolio" />
            <meta property="og:title" content="Projet 2 - Portfolio" />
            <meta property="og:description" content="page projet-2" />
            <meta property="og:image" content="http://localhost:3000/assets/Projet_2_img_1.png" />
        </Head>
        <div className='flex flex-col h-full w-full md:h-screen justify-evenly relative' >
            <h1 className='text-white m-3 pt-28'>Projet 2</h1>
            <div className='flex flex-col items-center md:flex-row'>
                <Gallery slides={slides} />
                <div  >
                    <p className='text-white py-4 px-4 sm:text-lg justify-self-center '>
                        Dans ce projet, j&#39;ai collaboré avec 3 mes collègues et ont à réaliser site web de formation en informatique
                        qui permet aux utilisateurs de créer un compte et de s&#39;authentifier,
                        ce qui leur donne accès à une variété de cours en ligne. Les utilisateurs peuvent
                        s&#39;inscrire et se désinscrire de cours en fonction de leurs intérêts et de leur disponibilité.
                        <br />
                        En outre, il y a un côté administrateur qui permet d&#39;ajouter ou de supprimer des cours,
                        cela rend le site facile à utiliser pour les administrateurs cours.
                    </p>
                    <div className='flex flex-wrap justify-around py-4 px-4' >
                        <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
                            href='https://github.com/AmirEddine/Centre-formation-info' target='_blank' rel="noreferrer noopener" >Code source</a>
                        <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
                            href='https://centre-formation-infomatique.onrender.com/' target='_blank' rel="noreferrer noopener" >Voire le site</a>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default projet_2;
