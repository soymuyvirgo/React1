import React from 'react';
import CardPizza from './CardPizza';
import '../assets/css/Home.css'; // Ruta correcta hacia Home.css
import header2 from '../assets/img/header2.png'; // Imagen de la pizza 1
import header3 from '../assets/img/header3.png'; // Imagen de la pizza 2
import errorImage from '../assets/img/error.png'; // Imagen de la pizza 3 (sólo como ejemplo)

const Home = () => {
  const pizzas = [
    {
      title: 'Pizza Napolitana',
      ingredients: '🍕 mozzarella, tomates, jamón, orégano',
      price: '$5.950',
      image: header2
    },
    {
      title: 'Pizza Española',
      ingredients: '🍕 mozzarella, gorgonzola, parmesano, provolone',
      price: '$6.950',
      image: header3
    },
    {
      title: 'Pizza Pepperoni',
      ingredients: '🍕 mozzarella, pepperoni, orégano',
      price: '$6.950',
      image: errorImage
    }
  ];

  return (
    <div className="container-home"> {/* Aplicamos la clase para el contenedor de las tarjetas */}
      {pizzas.map((pizza, index) => (
        <div key={index} className="card-container"> {/* Aplicamos la clase para cada tarjeta */}
          <CardPizza
            title={pizza.title}
            ingredients={pizza.ingredients}
            price={pizza.price}
            image={pizza.image}
          />
        </div>
      ))}
    </div>
  );
};

export default Home;
