import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Logo3 from "../Imagenes/Logo2.png";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Imagenescarrusel from "./Carrusel"
import { Link } from "react-router-dom";
import DataInicio from "./DataInicio";
function Inicio (){
    return(
        <div className="firstpart">
            <Card className="Custom-carI">
                <Row className="g-0">
                    <Col md={4} >
                        <Card.Img variant="top" src={Logo3} style={{width:'100%', height: 'auto' }}/>
                    </Col>
                    <Col md={8}>
                        <Card.Body className="d-flex flex-column align-items-center ">
                            <div className="text-end parrafo2">
                                <Card.Title className="text-end text-justify display-5">Alberto Sarapura</Card.Title>
                                <Card.Text className="custom-text">
                                    Soy estudiante de Ingeniería de Sistemas con una sólida 
                                    capacidad para inspirar colaboración a través de mi entusiasmo 
                                    y compromiso. Me destaco por cumplir mis responsabilidades con 
                                    excelencia, entregando trabajos de alta calidad que reflejan un
                                    enfoque innovador y alineado con los objetivos del equipo. 
                                    Además, soy eficaz, responsable y tengo una fuerte adaptabilidad 
                                    ante nuevos desafíos. Mi participación activa en proyectos como 
                                    la Intercom y envoluntariados ambientales demuestra mi dedicación 
                                    al trabajo en equipo y a la responsabilidad social, lo que me 
                                    permite contribuir de manera significativa tanto en el ámbito 
                                    académico como en la comunidad.
                                </Card.Text>
                            </div>
                            <div className="iconos-inicio">
                                {DataInicio.map((Ini, idx)=>(
                                    <Col key={idx} >
                                        <Link to={Ini.Link} target="_blank">
                                        <img src={Ini.img} alt="Icono" style={{ width: '30px', height: '30px', marginLeft: '5px' }} />
                                        </Link>
                                    </Col>   
                                ))}    
                            </div>
                                <a href="./CVOFICIAL.pdf" download>
                                <Button  className="mt-4 butoncv" >Mí CV</Button>  
                                </a>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
            
            <div className="carrusel">
                <h1 className="text-center titulo-carrusel">Tecnoligias y herramientas de programacion</h1>
                <Carousel className="imagenescarrusel" interval={3000}>
                    {Imagenescarrusel.map((car, idx) => (
                    <Carousel.Item key={idx}>
                        <div
                        className="d-flex justify-content-center align-items-center barra"
                        style={{ height: '200px', width: '100%', maxWidth: '600px' }}
                        >
                        <img src={car.img} alt={car.alt} className="imacar" />
                        </div>
                    </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}
export default Inicio;

