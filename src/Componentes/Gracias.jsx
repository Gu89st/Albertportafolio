import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Gracias(){
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/Inicio');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="mensaje">
            <h1 className="mesa">Su mensaje ha sido enviado con éxito</h1>
            <h2>Le responderé lo antes posible</h2>
            <h3>GRACIAS</h3>
        </div>
    );
}
export default Gracias