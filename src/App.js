import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import Context from "./Context";


export default function App() {
 
  const [galeria, setGaleria] = useState([]);
  const globalState = { galeria, setGaleria};
  const endpoint = "/React-Natural-Pic2-/fotos.json";

  const [info, setInfo] = useState([]);

  useEffect(() => {
    consultarInformacion();
    }, []);


   //  Función que consulta la API
   const consultarInformacion = async () => {
        const url = endpoint;
        const response = await fetch(url)
        const data = await response.json()
        setGaleria(data.photos); // con setInfoactualizamos el estado
  }




  return (
    <div className="App">
      <Context.Provider value={ globalState }>

      <BrowserRouter basename="React-Natural-Pic2-">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </Context.Provider>
    </div>
  );
}
