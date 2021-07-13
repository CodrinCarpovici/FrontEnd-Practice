import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Header />
    </div>
  );
}

export default App;
