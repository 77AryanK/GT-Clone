import './App.css';
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import ABOUTUS from "./pages/Aboutus"
import Blogs from "./pages/Blogs"
import Booknowbtn from "./Btn-windows/Booknow-btn"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

// the page below navbar that is routes will be the one that will be changed always but the page above navbar will not change 
//routes will change the page below navbar on dependeing on the route we go- so we will put footer under the 
// with react router dom there a component that we can use called link
//path-destination of the route 

function App() {
  return (
    <div className="app ">
      <Router>
        <Navbar/> 
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<ABOUTUS />} />
          <Route exact path='/blogs' element={<Blogs />} />
          {/* <Route exact path='/Navbar' element={<Navbar />} /> */}

        </Routes>
        <Footer/>
      </Router>
      {/* <div className='overlay hidden'></div>  */}

    </div>
  );
}


export default App;




