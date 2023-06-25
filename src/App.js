import Header from './components/header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Inicio from './pages/Inicio';
import SobreMi from './pages/SobreMi'
import Proyectos from './pages/Proyectos';
import Contacto from './pages/Contacto';
import Page404 from './pages/Page404';

function App() {
  return (
    <Router>
      <Header className="container" />
      <Routes>
        <Route path="/" element={<Inicio />}/>
        <Route path="/SobreMi" element={<SobreMi />}/>
        <Route path="/Proyectos" element={<Proyectos />}/>
        <Route path="/Contacto" element={<Contacto />}/>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  ) 
}

export default App;
