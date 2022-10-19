
import react from "react";
import Galeria from "../components/Galeria";
import "../assets/css/galeria.css";
import Heart from "../components/Heart";
import Context from "../../src/Context"
import { useState, useEffect, useContext } from "react"; 


export default function Favoritos() {

  const { galeria, setGaleria } = useContext(Context);


  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {galeria.map((data) => {
         return( data.liked ? (
                    <div className="foto" key={data.id} style={{background: `url(${data.src.medium})` }}  >
     
            <div >
              <div onClick={()=>{
        
                            const index = galeria.findIndex((e) => e.id === data.id)
                          
                            galeria[index].liked = !galeria[index].liked
                            console.log(galeria[index].liked)
                            setGaleria([...galeria])

                          }} >  
                        <Heart  filled={data.liked}/>

              </div>
            </div>
            <p>{data.alt}</p>
          </div>
         
         ): (''))
           
          
     })}
    </div>
      
    </div>
  );
}
