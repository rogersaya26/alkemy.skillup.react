import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import Listado from "./components/Listado";
import Detalle from "./components/Detalle";
import Login from "./components/Login";
import Resultados from "./components/Resultados";

function App() {
  const addOrRemoveFromFavs = (e) => {
    const btn = e.currentTarget.value;
    const parent = btn.parentElement;
    console.log(parent);
  };

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={(props) =><Listado addOrRemoveFromFavs={addOrRemoveFromFavs}{...props}/>} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
