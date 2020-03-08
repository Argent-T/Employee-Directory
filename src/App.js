import React from 'react';
// import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";
import Home from "./pages/home";
import Wrapper from "./components/Wrapper";
function App() {
  return (
    <Router>
      <div>
    
        <Wrapper>
          <Route exact path="/" component={Home} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
