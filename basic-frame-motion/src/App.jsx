import React, { useState } from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes, useLocation} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import { AnimatePresence } from "framer-motion";
import Modal from './components/Modal';
import ParticlesBackground from './components/Particles/ParticlesBackground';


function App() {
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
  const [showModal, setShowModal] = useState(false);

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

  // let location = useLocation();

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //           <Route exact path="/" element={<Home />}></Route>
  //           <Route exact path="base" element={<Base addBase={addBase} pizza={pizza} />}></Route>
  //           <Route exact path="toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />}></Route>
  //           <Route exact path="order" element={<Order pizza={pizza} />}></Route>
  //     </>
  //   )
  // )

  const AnimateRoutes = () => {
    const location = useLocation();
    const locationArr = location.pathname?.split('/') ?? [];
    console.log(locationArr);
    return (
      <AnimatePresence mode='wait' initial={false} onExitComplete={()=>setShowModal(false)}>
        <Routes location={location} key={locationArr[1]}>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="base" element={<Base addBase={addBase} pizza={pizza} />}></Route>
          <Route exact path="toppings" element={<Toppings addTopping={addTopping} pizza={pizza} />}></Route>
          <Route exact path="order" element={<Order pizza={pizza} setShowModal={setShowModal} />}></Route>
        </Routes>
      </AnimatePresence>
    );
  }

  const router= createBrowserRouter(
    createRoutesFromElements(<Route path="*" element={<AnimateRoutes />} />)
  );
  
  return (
    <>
      <ParticlesBackground />
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <RouterProvider router={router}/>
    </>
  );
}

export default App;