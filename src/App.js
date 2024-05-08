import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';

function App() {
  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="works" element={<Works />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
