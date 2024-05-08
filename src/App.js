import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Home from './components/Home';


function App() {
  return (
    <div className='top-space'>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
