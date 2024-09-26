import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const CardPizza = ({ title, ingredients, price, image }) => {
  return (
    <Card className="h-100"> {/* h-100 para que todas las cards tengan la misma altura */}
      <Card.Img
        variant="top"
        src={image}
        style={{ height: '200px', objectFit: 'cover' }} // Tamaño uniforme para la imagen
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <strong>Ingredientes:</strong>
            <br />
            {ingredients}
          </Card.Text>
        </div>
        <div>
          <h5><strong>Precio: {price}</strong></h5>
          <div className="d-flex justify-content-between">
            <Button variant="outline-dark">Ver Más 👀</Button>
            <Button variant="dark">Añadir 🛒</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
