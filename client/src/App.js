// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import Homescreen from './screens/Homescreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return (
    <div className="App">
      <Navbar />
    
      <Router>

        <Routes>
          <Route exact path="/" element={<Homescreen />}> </Route>
          <Route path="/cart" element={<Cartscreen />} ></Route>
          <Route path="/register" element={<Registerscreen />} ></Route>
          <Route path="/login" element={<Loginscreen />} ></Route>
        </Routes>
      </Router >
      
    </div>
  );
}

export default App;
