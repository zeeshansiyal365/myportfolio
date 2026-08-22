import React from 'react'
import Portfolio from './Portfolio'
import "./App.css"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
    useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
<>
  <Portfolio />
</>
  )
}

export default App
