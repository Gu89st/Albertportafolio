import React, { useEffect, useRef} from "react";
import Form from 'react-bootstrap/Form';

const funcion=(text='', tiempo=100, etiqueta, setIntervalRef)=>{
    let arrayCaracteres= text.split('');
    etiqueta.innerHTML='';
    let cont = 0;
    setIntervalRef.current = setInterval(function(){
        etiqueta.innerHTML += arrayCaracteres[cont]
        cont++;
        if(cont===arrayCaracteres.length){
            clearInterval(setIntervalRef.current)
        }
    }, tiempo);
}

export const Animacion=({texto,tiempo, id}) =>{
    const intervalRef=useRef(null);
    useEffect(()=>{
        const etiqueta=document.getElementById(id);
        funcion(texto,tiempo,etiqueta,intervalRef);
        const currentInterval = intervalRef.current;
        return()=>{
            clearInterval(currentInterval);
        };
    }, [texto, tiempo, id])
    return <span id={id}></span>
};

const InputField = ({label,type,name,placeholder,feedback, onChange, value})=>(
    <Form.Group className="mb-3" >
        <Form.Label className="text" >{label}</Form.Label>
        <Form.Control  placeholder={placeholder} type={type} name={name} onChange={onChange} value={value} />
        {feedback && <div className="text-danger">{feedback}</div>}
    </Form.Group>
); export default InputField





