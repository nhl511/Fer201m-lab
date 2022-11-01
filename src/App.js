import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Film from './components/Film';
import Contact from './components/Contact';
import About from './components/About';
import News from './components/News';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>        
        <Route path="Film/:id" element={<Film/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/News" element={<News/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
