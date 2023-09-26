import './App.css';
import Footer from './Components/Footer/Footer';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dummy from './Pages/Home/Dummy';


function App() {
  return (
    <div>
      {/* <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="home" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router> */}

      <Dummy/>
    </div>
  );
}

export default App;
