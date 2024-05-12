//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import {Routes, Route} from "react-router-dom"
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Astros from './components/astros/Astros.jsx';
import "./App.css";
import Card from './components/about/About.jsx'


import './App.css';

function App() {
  // const [count, setCount] = useState(0)
  const links=[
   {
    id:1,
    text:"home",
    link:'/',
   },
   {
    text:"apod",
    link:'/apod',
   },

   {
    text:"astros",
    link:"/astros",
   },
   {
    text:"about",
    link:"/about",
   }
  ];

  return (
    <> 
     <Navbar header="space-app" links={links}/>
     <Routes>
      <Route element={<Hero />} path="/" />
      <Route element={<Astros />} path="/astros"/>
      <Route element={<Card />} path="/about"/>
     </Routes>
   
    </>
  ); 
}

export default App;























