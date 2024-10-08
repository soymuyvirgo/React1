import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import { pizzas } from './assets/js/pizzas.js'; // Importamos pizzas

function App() {
  const [cart, setCart] = useState([]);

  // Función para agregar una pizza al carrito
  const addToCart = (pizza) => {
    const existingPizza = cart.find((item) => item.id === pizza.id);
    if (existingPizza) {
      // Si la pizza ya está en el carrito, incrementamos la cantidad
      setCart(
        cart.map((item) =>
          item.id === pizza.id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      // Si la pizza no está en el carrito, la agregamos con cantidad 1
      setCart([...cart, { ...pizza, count: 1 }]);
    }
  };

  // Función para incrementar la cantidad de una pizza en el carrito
  const increaseCount = (pizzaId) => {
    setCart(
      cart.map((item) =>
        item.id === pizzaId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // Función para disminuir la cantidad de una pizza en el carrito
  const decreaseCount = (pizzaId) => {
    setCart(
      cart.reduce((acc, item) => {
        if (item.id === pizzaId) {
          if (item.count > 1) {
            acc.push({ ...item, count: item.count - 1 });
          }
          // Si la cantidad es 1 y se disminuye, no se agrega al array (se elimina del carrito)
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  return (
    <Router>
      <div>
        <Navbar cart={cart} />
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Home pizzas={pizzas} addToCart={addToCart} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />   
          <Route
            path="/cart"
            element={
              <Cart
                cart={cart}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
              />
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
