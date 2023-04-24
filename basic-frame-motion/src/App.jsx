import React, { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';


function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }
  
  const addTopping = (topping) => {
    let newToppings;
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="base" element={<Base addBase={addBase} pizza={pizza} />}></Route>
        <Route exact path="toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />}></Route>
        <Route exact path="order" element={<Order pizza={pizza} />}></Route>
      </>
    )
  )
  
  return (
    <>
      <Header />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;