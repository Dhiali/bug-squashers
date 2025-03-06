// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Add Routes here
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Card from './components/Card';
// import Accordion from './components/Accordion';
import Form from './components/GT3Form';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>  {/* Wrap routes in Routes */}
          <Route path="/" element={<Carousel />} />
          <Route path="/card" element={<Card />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
