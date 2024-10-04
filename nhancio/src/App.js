// import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Service from './Components/servicess/services';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
       <Router>
        
       <Navbar/>

        <HomePage/>
        <Routes>
        <Route exact path="/" ></Route>
      
      </Routes>
        <Service/>
      <Footer/>
       </Router>
    </div>
  )
}

export default App;
