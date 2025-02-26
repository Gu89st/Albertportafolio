import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Datacerti from "./DatosCerti";

const Certificaciones=() =>{
  return (
    <div className="secondpart">
      <h1 className="text-center text-white mb-4">Mís Certificaciones</h1>
      <Row xs={1} md={3} className="g-4">
        {Datacerti.map((cert, idx)=>(
          <Col key={idx} className="certificado">
            <Card className="card-custom">
            <Card.Img variant="top" src={cert.img} className="img-fluid" style={{ height: '350px', objectFit: 'cover' }} />
              <Card.Body className="text-center text-white">
                <Card.Title>{cert.titulo}</Card.Title>
                <Card.Text>{cert.institucion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Certificaciones;