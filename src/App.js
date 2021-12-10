import React, { Component } from 'react';
import NavBar from './Components/AppWithRouter/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/AppWithRouter/Home';
import About from './Components/AppWithRouter/About';
import Contact from './Components/AppWithRouter/Contact';
import PostDetails from "./Components/AppWithRouter/PostDetails";

//Container Component | Statefull
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path="/:post_id" element={<PostDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
//use exact keyword to set the default path
