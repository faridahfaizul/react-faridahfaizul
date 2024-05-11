import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import AllProjects from './components/AllProjects';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/archive" element={<AllProjects />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
