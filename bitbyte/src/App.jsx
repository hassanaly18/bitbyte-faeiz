import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Price from "./components/Price";
import Client from "./components/Client";
import Info from "./components/Info";
import ServicesList from "./components/ServicesList";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Service />
                <About />
                <Price />
                <Client />
                <Info />
              </>
            }
          />
          <Route
            path="/service"
            element={
              <>
                <ServicesList />
                <Info />
              </>
            }
          />
          <Route
            path="/experience"
            element={
              <>
                <About />
                <Info />
              </>
            }
          />

          {/* <Route path="/price" element={<Price />} /> */}
          <Route
            path="/contact"
            element={
              <>
                <Contact />
                <Info />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
