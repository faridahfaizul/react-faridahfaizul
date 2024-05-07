import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';
import HomeContent from './HomeContent';

function App() {
  return (
    <div className='container'>
      <Header />
      <HomeContent />
      <Footer />
    </div>
  );
}

export default App;
