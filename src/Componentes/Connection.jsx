import React from "react";
import Sobre from "./Sobre";
import Certificaciones from "./Certificaciones";
import Inicio from "./Inicio";
import Proyectos from "./Proyectos";
import Contactame from "./Mensaje";
import Gracias from "./Gracias";



const Connection=[
        { path: '/Sobre', element: <Sobre /> , label:"Sobre Mí"},
        { path: '/Certificaciones', element: <Certificaciones />, label:"Mis certificaciones" },
        { path: '/Inicio', element: <Inicio />, label:"Inicio" },
        { path: '/Proyectos', element: <Proyectos />, label:"Proyectos" },
        { path: '/Contactame', element: <Contactame />, label:"Contáctame" },
        { path: '/Gracias', element: <Gracias /> }
]
export default Connection