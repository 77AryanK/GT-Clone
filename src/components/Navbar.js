import React,{useState}  from 'react' ;
import Logo from '../assets/gtlogo.png' ;
import {Link} from "react-router-dom" ;         
import "../style/Navbar.css"

import BtnWindows from '../Btn-windows/Booknow-btn'
import { ReactDOM } from 'react-dom'

// link component is same a <a>tag - where we can click it an it will serve as a link- IT IS BETTER(bes t practice) to use this component insted of a 'link tag and a tag in HTML'

function Navbar() {

  const [isOpen, setIsOpen] =  useState(false)

  const onclose = () => setIsOpen(false)
  
  
  return (

    <div className='navbar scrollbar-hidden'>
          <Link to="/" ><img className='logo' src={Logo}/> </Link>

        <div className='nav'>
          <a className='list' href='https://www.google.co.in/maps/place/Green+Tiger+Experience+Centre+-+JP+Nagar/@12.9068282,77.5915871,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae15330de7c629:0x272de52d836a0e46!8m2!3d12.9068282!4d77.5915871!16s%2Fg%2F11trx9y9p3?hl=en&coh=164777&entry=tt&shorturl=1'>STORE LOCATOR</a>
          {/* <p className='list'>BOOK NOW</p> */}
          {/* <p className='list'>BOOK NOW</p> */}


          <button className=' booknowbtn show-modal' onClick={() => setIsOpen(true)}>BOOK NOW</button>



          <Link className='list' to="/products">OUR PRODUCTS</Link>
          <Link className='list' to="/about">ABOUT US</Link>
          <Link className='list' to="/blogs">BLOGS</Link>
        </div>
          <BtnWindows open={isOpen} onClose={ onclose}>
            CHILDREN
          </BtnWindows>
         
    </div>
  )
}

export default Navbar