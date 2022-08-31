
import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/Navbars/NavBar";
import { Banner } from "./components/Banners/Banner";
import { Footer } from './components/Footers/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Services  from './components/Service/Services';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
