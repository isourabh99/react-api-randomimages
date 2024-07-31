import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Gallery from "./components/Gallery";
import About from "./components/About";
function App() {
  return (
    <div className="relative min-h-screen w-screen bg-neutral-800 text-neutral-400 overflow-x-hidden">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
