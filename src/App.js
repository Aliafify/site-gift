import "./App.css";
import Home from "./Home.js"
import NotFound from "./NotFound.js"
import Navbar from "./Navbar";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChoosenGift from "./components/ChooseGift";


function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/gift' element={<ChoosenGift gift={'test'}/>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </Router>
  );
}

export default App;
