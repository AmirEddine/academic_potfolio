import React from 'react'
import Gallery from './Gallery';
import Projet_1_img_1 from '../public/assets/Projet_1_img_1.png';
import Projet_1_img_2 from '../public/assets/Projet_1_img_2.png';

export const Projet_1 = () => {
  const slides = [
    {
      url: Projet_1_img_1.src
    },
    {
      url: Projet_1_img_2.src
    }
  ];
  return (
    
    <div className='flex flex-col h-full w-full md:h-screen justify-evenly relative ' >
      <h1 className='text-white m-3 pt-28'>Projet 1</h1>
      <div className='flex flex-col items-center md:flex-row'>
       
      <Gallery slides={slides} />
        
          <div  >
            <p className='text-white  sm:text-lg justify-self-center py-4 px-4'>Dans ce projet, j&#39;ai créé un petit jeu d&#39;arcade jouable dans un navigateur web.
              Il s&#39;agit d&#39;un donjon rempli de pièges et de trésors où le joueur doit déplacer un personnage pour ramasser autant de points que possible.
              Les trésors permettent de gagner des points tandis que les pièges font perdre de l&#39;énergie.
              Le but est de récolter le plus de points possibles avant que l&#39;énergie du joueur ne soit épuisée.</p>
            <div className='flex flex-wrap justify-around py-4 px-4' >
              <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
                href='https://github.com/AmirEddine/Dungeon-Explorer ' target='_blank' rel="noreferrer noopener">Code source</a>
              <a className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
                href=' https://capable-figolla-1fc92e.netlify.app/' target='_blank' rel="noreferrer noopener">Voire le site</a>
            </div>
          </div>
        

      </div>
    </div>
  )
}
export default Projet_1;