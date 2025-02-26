import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import intercon from "../Imagenes/Intercon.png"

function Sobre(){
    return (
    <div className="sobre">
        <Container>
            <h1 className="text-center tytle-sobre link-light">Sobre Mí</h1>
            <Row >
                <Col>
                    <Card className="h-100">
                        <Card.Body className="cuerposobre">
                            <Card.Title className="text-center"><h1>Mis estudios</h1></Card.Title>
                            <h3 className="text-start">USIL - En curso</h3>
                            <h4 className="text-center">Ing. de Sistemas</h4>
                            <h3 className="text-start">ICPNA - Culminado</h3>
                            <h4 className="text-center">Nivel avanzado</h4>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100 CT">
                        <Card.Body className="cuerposobre">
                            <Card.Title className="text-center " ><h1>Mis habilidades</h1></Card.Title>
                            <h3>Colaboración efectiva</h3>
                            <h3>Compromiso con la calidad </h3>
                            <h3>Innovación en soluciones</h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="h-100">
                        <Card.Body className="cuerposobre">
                            <Card.Title className="text-center"><h1>Mis hobbies</h1></Card.Title>
                            <h3>Ciclismo</h3>
                            <h3>Leer </h3>
                            <h3>Fútbol</h3>
                            <h3>Ejercicio</h3>
                            <h3>Programar</h3>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
      </Container>
      <div className="intercon">
           
        <Card className="Custom-sobre">
            <Row className="g-0">
                <Col md={4} >
                    <Card.Img variant="top" src={intercon} style={{width:'100%', height: '100%' }}/>
                </Col>
                <Col md={8}>
                    <Card.Body className="d-flex flex-column align-items-center ">
                            <div className="text-end parrafo2">
                                <Card.Title className="text-end text-justify display-5">INTERCON</Card.Title>
                                <Card.Text className="custom-text">
                                Participé en la 2024 IEEE XXVII Conferencia Internacional sobre Electrónica, 
                                Ingeniería Eléctrica y Computación - INTERCON, asistiendo a diversas conferencias, 
                                presentando papers y participando en seminarios. Esta experiencia me permitió 
                                conectar con investigadores, profesionales y estudiantes apasionados por el 
                                desarrollo de tecnologías.
                                </Card.Text>
                            </div>
                        
                    </Card.Body>
                </Col>
            </Row>
        </Card>
        </div> 
    </div>
    );
}
export default Sobre