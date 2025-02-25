import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Animacion } from "./FuncinME";
import InputField from './FuncinME';
import { useState } from 'react';

function Contactame() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mensaje: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'El nombre es obligatorio';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      newErrors.name = 'El nombre solo puede contener letras y espacios';
    }
    if (!formData.email) {
      newErrors.email = 'El correo electrónico es obligatorio';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Dirección de correo electrónico inválida';
    }
    if(!formData.mensaje){
      newErrors.mensaje='No se olvide de dejar su mensaje';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = 'https://formsubmit.co/c26036798ed1730005ae100e25add08f';


      Object.keys(formData).forEach(key => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = formData[key];
        form.appendChild(input);
      });

      const nextInput = document.createElement('input');
      nextInput.type = 'hidden';
      nextInput.name = '_next';
      nextInput.value = 'http://localhost:3000/gracias'; 
      form.appendChild(nextInput);

      document.body.appendChild(form);
      form.submit();
    }
  };

  return (
    <div className="ThirdPart">
      <div className="Parrafoinicial">
        <Animacion
          texto={`¿Tienes un proyecto en mente o simplemente quieres conectar? ¡Házmelo saber!, Enviame un mensaje y responderé lo antes posible.`}
          tiempo={100}
          className="Parrafo"
          id="parrafo"
        />
      </div>
      <Form className="Form text-center" onSubmit={handleSubmit}>
        <InputField
          label="Ingresé su nombre" type="text" name="name" placeholder="Tu nombre" feedback={errors.name}onChange={handleChange} value={formData.name}/>
        <InputField
          label="Ingresé su correo Electrónico"type="email"name="email"placeholder="name@example.com"feedback={errors.email} onChange={handleChange}value={formData.email}/>
        <InputField
          label="Ingresé su mensaje"type="textarea"name="mensaje"placeholder="Escribe tu mensaje"onChange={handleChange}feedback={errors.mensaje}value={formData.mensaje}/>
        <Button className="boton" type="submit">Enviar mensaje</Button>
      </Form>
    </div>
  );
}

export default Contactame;