import React from "react";
import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
        <>
        <NavBar/>
        <ItemListContainer greeting="Bienvenidxs a Veterinaria Huellitas!"/>
        </>
    );
}



export default App;