// import logo from './logo.svg';
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
       <Router>
       <Navbar />
        <Routes>
        <Route exact path="/" ></Route>
      
      </Routes>


       </Router>
    </div>
  )
}

export default App;
