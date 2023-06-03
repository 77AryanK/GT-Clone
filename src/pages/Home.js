
import React,{useState} from 'react' //to use state in functions 

import '../style/Home.css';
import CalculateIcon from '@mui/icons-material/Calculate';
import TouchAppIcon from '@mui/icons-material/TouchApp';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';

import { ReactDOM } from 'react-dom'
import EMIcalculator from '../Btn-windows/EMIcalculator';
import '../style/Window.css'




function Home() {
  //const  [isOpenEMI,setIsOpenEMI] = useState(false)
  //const  onCloseEMI =  () => setIsOpenEMI(false)

  return (
   <div className='home scrollbar-hidden'>
      <div>
        {/***SECTION--1***/}
        <div className='section section-1'> 

          <div className='container1'> 
            <div className='left'>
              <div className='heading'><h1>World's 1st Dual Powertrain </h1></div>
              <div className='heading-changingtext'><div className='heading-changingtext-1'><p>Bye Bye To Range Anxiety</p></div>   </div>
            </div>
            <div className='right'>
              <video className='section1_video' autoPlay muted src='https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/videos/video_final.mp4'></video>
            </div>
          </div>
    
          <div className='container2'>
            <div className='container2-a'>
              <div ><img className='certImg certImg1' src='https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/associations_logos/81.svg'></img></div>
              <div ><img className='certImg certImg2' src='https://greentiger.in/assests/ISO.png'></img></div>
              <div ><img className='certImg certImg3' src='https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/associations_logos/16.svg'></img></div>
              <div ><img className='certImg certImg4' src='https://greentiger.in/assests/arai.png'></img></div>
              <div ><img className='certImg certImg5' src='https://greentiger.in/assests/patent.png'></img></div>
            </div>
          </div>
        </div>



        {/***SECTION--2***/}
        <div class="section section-2">
          <div className='section-2-container'>
            <div className='section-2-part-A-text'>
              <p className='grass-text'>
                <span className='grass-text-span'>G</span>
                <span className='grass-text-span'>R</span>
                <span className='grass-text-span'>A</span>
                <span className='grass-text-span'>S</span>
                <span className='grass-text-span'>S</span>
              </p>
            </div>
            <div className='section-2-part-B-halfcircle'></div>
            <div className='halfcircle-text'>
              <p className='halfcircle-text-a'>GREEN</p>
              <span className='halfcircle-text-b'>Save Emission of ~8 </span>
              <br></br>
              <span className='halfcircle-text-b'>trees / yr</span>
            </div>

              <div className='halfcircle-bordericons'>
                <div className='bordericon ' style={{backgroundImage: 'url(https://s3.ap-south-1.amazonaws.com/greentiger.in-…/website_3_0/Leaf_In_hand_illustrator/green_5.svg)'}}></div>
              </div>
              <div className='halfcircle-bordericons'>
                <div className='bordericon ' style={{backgroundImage: 'url(https://s3.ap-south-1.amazonaws.com/greentiger.in-…/website_3_0/Leaf_In_hand_illustrator/green_1.svg)'}}></div>
              </div>
              <div className='halfcircle-bordericons'>
                <div className='bordericon ' style={{backgroundImage: 'url(https://s3.ap-south-1.amazonaws.com/greentiger.in-…/website_3_0/Leaf_In_hand_illustrator/green_2.svg)'}}></div>
              </div>
              <div className='halfcircle-bordericons'>
                <div className='bordericon ' style={{backgroundImage: 'url(https://s3.ap-south-1.amazonaws.com/greentiger.in-…/website_3_0/Leaf_In_hand_illustrator/green_3.svg)'}}></div>
              </div>
              <div className='halfcircle-bordericons'>
                <div className='bordericon ' style={{backgroundImage: 'url(https://s3.ap-south-1.amazonaws.com/greentiger.in-…/website_3_0/Leaf_In_hand_illustrator/green_4.svg)'}}></div>
              </div>
          </div>

        </div>




        {/***SECTION--3***/}
        <div class="section section-3">
          <div className='section-3-leftpart'>
            
          </div>
          <div className='section-3-rightpart'>
            {/* <div className='' */}
            <h2 className='section-3-rightpart-h2'>STAY CONNECTED</h2>
            <p className='section-3-rightpart-changingtext'>Find My Vehicle</p>
            <img className='section-3-rightpart-img' src='https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/app_gt_logo/Frame%206.svg'></img>
          </div>
        </div>









        {/***SECTION--4***/}
        <div class="section section-4">
          <div className='section-4-headcont'><h2 className=' section-4-heading'>CONVERT IN <span className=' text-green'>3 STEPS</span>  </h2>
          </div>
          <div className='scroll-body'>
            <div className='scroll-card scroll-card-1'>
              <img className='scroll-card-img' src='https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/convert_your_vehicle/step1.png'></img>
              <p className='scroll-card-text1 '>STEP 1</p> 
              <p className='scroll-card-text2'>Book Your Vehicle</p>
              <p className='scroll-card-text2 text-green'>for Conversion</p>        
            </div>    
            <div className='scroll-card scroll-card-2'>
              <img className='scroll-card-img' src='https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/convert_your_vehicle/step2.png'></img>
              <p className='scroll-card-text1 '>STEP 2</p>
              <p className='scroll-card-text2 '>Your Vehicle gets Converted in</p>
              <p className='scroll-card-text2 text-green'>GT Center</p>
            </div>
            <div className='scroll-card scroll-card-3'>
              <img className='scroll-card-img' src='https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/convert_your_vehicle/step3.png'></img>
              <p className='scroll-card-text1 '>STEP 3</p>
              <p className='scroll-card-text2 '>Vehicle is ready. Welcome to</p>
              <p className='scroll-card-text2 text-green'>Green Tiger Family</p>
            </div>
            </div>
        </div>








        {/***SECTION--5***/}
        <div class="section section-5 section-5-space-between">
          <div className='container1'> 
            <div className='left'>
              <div className='heading'><h1>VEHICLES WE CONVERT </h1></div>
              <div className='heading-changingtext'>
                <div><img className='heading-changingtext-img' src='https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/Vechile_convert/67.svg'></img></div>
                <div className='heading-changingtext-1'><p>Pleasure, Maestro</p></div>   
              </div>
            </div>
            <div className='right'>
              <video className='section1_video' autoPlay muted src='https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/videos/vehicle_we_convert.mp4'></video>
            </div>
          </div>
      
          <div className='container2 container2-2 '>
            <div className='conatiner-btnsA'>
              <div className='conatiner-btnsB'>
                //<div className='container-button'><button className='button button-emicalculator' onClick={() => setIsOpenEMI(true)} ><CalculateIcon/>EMI CALCULATOR</button></div>
                //<EMIcalculator open={isOpenEMI} onCloseEMI={onCloseEMI}/>
                <div className='container-button'><button className='button button-emicalculator'><CalculateIcon/>EMI CALCULATOR</button></div>
                <div className='container-button'><button className='button button-svaingcalculator'><CalculateIcon/>SAVING CALCULATOR</button></div>
                <div className='container-button'><button className='button button-booknow'><TouchAppIcon/>BOOK NOW</button></div>
                <div className='container-button'><button className='button button-faq'><LiveHelpIcon/>FAQ</button></div>
                
                
              </div>
            </div>
          </div>
         </div>

{/* CalculateIcon */}











        {/***SECTION--6***/}
        <div class="section section-6">
          <div className='s6-container-A'>
            <div className='s6-heading-1-container' style={{lineHeight:'10rem'}}><h2 className='s6-heading-1'>OUR <span className=' text-green'>ASSOCIATIONS</span></h2></div>
            <div className='asssociations-slider1' style={{display:'flex',justifyContent:'center'}} >

              <div className='slider1-imgs'>
                <div className='slider1-img' style={{backgroundImage: `url(	https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/associations_logos/16.webp)`}}></div>
              </div>
              <div className='slider1-imgs'>
                <div className='slider1-img' style={{backgroundImage: `url(	https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/associations_logos/19.svg)`}}></div>
              </div>

              <div className='slider1-imgs' >
                <div className='slider1-img' style={{backgroundImage: `url(	https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/associations_logos/80.svg)`}}></div>
              </div>

              <div className='slider1-imgs'>
                <div className='slider1-img' style={{backgroundImage: `url(	https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/associations_logos/11.png)`}}></div>
              </div>

            </div>
          </div>
          <div className='s6-container-B'>
            {/* <div className=''><h2 className='s6-heading-1'>WHAT PEOPLE <span className=' text-green'>ARE SAYING</span></h2></div>
            <div className=''></div> */}
            {/* <div className=''></div> */}
          </div>
        </div>








      </div>
   </div>
  )
}

export default Home


