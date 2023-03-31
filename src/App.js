import './App.css';
import Contact from "./components/Contact/index"
import NavBar from "./components/NavBar/index"
import Index from "./components/Index/Index"
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NotFound from './components/NotFound';


function App() {
return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact path="/" Component={Index} />
            <Route exact path="/contact" Component={Contact} />
            <Route path='*' Component={NotFound} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
