import Accueil from "@/components/Acceuil";
import Projet_1 from "@/components/Projet_1";
import Projet_2 from "@/components/Projet_2";
 



export default function Home({page}) {
  return (
   <>
   { page === 'Acceuil' ?
    <Accueil/>
    : page === 'Projet-1' ?
   <Projet_1/>
    : page === 'Projet-2' ?
   <Projet_2/>
   :
   404
   }
   
   
   </>
  )
}
