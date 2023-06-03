import "../style/Footer.css"
import React from 'react'


//learn how to break texts
function Footer() {
  return (
    <div className="footer scrollbar-hidden">
        <div className="footer-container">
            <div className="footer-part-1">
                {/* <div className="footer-part-1-box"> */}
                    <div className="fp1-all fp1-a">
                        <div className="ftb-1">
                            <p className="footer-texts ft-h">Legal Info</p>
                            <p className="footer-texts">Terms</p>
                            <a className="footer-texts" href='https://greentiger.in/privacy-policy'>Privacy Policy</a>
                            <p className="footer-texts">Refund Policy</p>
                            <p className="footer-texts ocapicity">.</p>
                        </div>
                    </div>
                    <div className="fp1-all fp1-b">
                        <div className="ftb-2">
                            {/* <span>
                            "Bommanahalli,"
                            "Bengaluru,"
                            "Karnataka - 560068"
                            </span> */}
                            <p className="footer-texts">Bommanahalli,</p>
                            <p className="footer-texts">Bengaluru,</p>
                            <p className="footer-texts">Karnataka - 560068</p>
                            <p className="footer-texts">CIN: U50100MH2020PTC348836</p>
                            <p className="footer-texts">GST:29AAICG6260B1ZO</p>
                        </div>
                    </div>
                    <div className="fp1-all fp1-c">
                        <div className="ftb-3">
                            <p className="footer-texts ft-h">Enquiry</p>
                            <p className="footer-texts">+91 7975592377</p>
                            <button className="franchise line-height-franchise">Franchise</button>
                            <p className="footer-texts ocapicity">.</p>
                            
                        </div>
                    </div>
                    <div className="fp1-all fp1-d">
                        <div className="ftb-4">
                            <div className="form line-height-ftb-4">
                                <form>
                                    <input className="input-subscribe line-height" placeholder="Enter Your Email" type="email" ></input>
                                </form>
                                <button className="subscribe line-height-subscribe ">Subscribe</button>
                            </div>
                            <p className="footer-texts line-height-ftb-4 bold">JOIN OUR COMMUNITY</p>
                            <p className="footer-texts ocapicity">.</p>
                        </div>
                    </div>
                {/* </div> */}

            </div>
            <div className="footer-part-2">
                            <div className="footer-part-2-left img-logo">
                                
                            </div>
                            <div className="footer-part-2-middle">
                                <p className="footer-part-2-text">All Rights Reserved Green Tiger Mobility Pvt.Ltd © 2023</p>
                            </div>
                            <div className="footer-part-2-right" style={{display:"flex",margin:"0px 40px 0px 0px"}}>
                                <p className="footer-part-2-text" style={{padding:"0px 20px 0px 0px"}} >Follow us:</p>
                                <div className="socialicons-container" style={{display:"flex",padding:"0px 0px 0px 0px"}}>
                                    <div className="social-icons" style={{ backgroundImage: `url(https://cdn-icons-png.flaticon.com/512/3536/3536505.png)` }} ></div> 
                                    <div className="social-icons" style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/174/174855.png')`  }} ></div>
                                    <div className="social-icons" style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/733/733547.png')`  }} ></div>
                                    <div className="social-icons" style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/128/1384/1384060.png')`}} ></div>
                                    <div className="social-icons" style={{ backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/733/733579.png')`  }} ></div>
                                    
                                </div> 
                            </div>
            </div>
        </div>
    </div>

  )
}

export default Footer