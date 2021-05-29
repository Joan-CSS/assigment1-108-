
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import QuantityPicker from './components/quantityPicker';


function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <h1>Hello from react!</h1>
      <QuantityPicker></QuantityPicker>
      <Footer></Footer>
    </div>
  );
}

export default App;
