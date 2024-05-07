import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className='container'>
      <Header />
        <header>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Footer />
    </div>
  );
}

export default App;
