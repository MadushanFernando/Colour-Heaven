import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Nfts from './Components/Nfts/Nfts';
import About from './Components/About/About';
import Nft from './Components/Nft/Nft';

function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='Nfts' element={<Nfts/>} />
          <Route path='Nfts/:id' element={<Nft/>} /> 
          <Route path="About" element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  </>
    
  );
}

export default App;
