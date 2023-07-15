import React from "react";
import { ChakraProvider } from '@chakra-ui/react'

import Popular from './Components/Popular/Popular.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AnimeItem from "./Components/AnimeItem/AnimeItem.js";
import Homepage from "./Components/Homepage/Homepage.js";
import Gallery from "./Components/Gallery/Gallery.js";


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/anime/:id" element={<AnimeItem/>}/>
        <Route path="/character/:id" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
