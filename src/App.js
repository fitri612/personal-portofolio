
// import logo from './logo.svg';
import './App.css';
import { NavBar } from "./components/Navbars/NavBar";
import { Banner } from "./components/Banners/Banner";
import { Footer } from './components/Footers/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Services  from './components/Service/Services';
import Experience from "./components/Experience/Experience";
import { Contact } from './components/Contacts/Contact';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Services />
      <Experience />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
