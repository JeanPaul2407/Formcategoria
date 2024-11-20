import { Routes, Route } from "react-router-dom"
import { Menu } from "../Components/common/Menu/Menu"
import { Home } from "../Components/pages/Home/Home"
import { Usuarios } from "../Components/pages/Usuarios/Usuarios";
import { ListadoUsuarios } from "../Components/pages/ListadoUsuarios/LIstadoUsuarios";
import CategoriaForm from "../Components/pages/Categoria/CategoriaForm";

export function Rutas(){
    return(
    <>
        <Menu></Menu>
        <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/usuarios" element={ <Usuarios /> } />
        <Route path="/listausuarios" element={ <ListadoUsuarios /> } />
        <Route path="/CategoriaForm" element={ <CategoriaForm /> } />
      </Routes>
    </>
    );
}