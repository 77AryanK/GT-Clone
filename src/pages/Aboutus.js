import React from 'react'
import '../style/Aboutus.css'


function ABOUTUS() {
  return (
    <div className='aboutus'>
      <div className='aboutus-container'>

        <div className='aboutus-section-1'>
          <div style={{
            padding:'1rem 0px 0px 0px'
            }}><p className='aboutus-s1-heading aboutus-heading'><span className='aboutus-heading-span-greeen-bolder'>POWER</span> TO CHOOSE</p></div>

          <div className='aboutus-s1-textcontent-container' style={{
            display:'flex',
            justifyContent:'center'}}>
            <div className='aboutus-textcontent' style={{
                width: '77.875rem',
                textAlign:'justify',
                padding:'3rem 0px 1rem 0px'
              }}>
              <p style={{fontSize:'1.25rem'}}>One of the most debated questions today is: "Electric or Petrol". With six patents, Green Tiger has a very unique and interesting answer - it gives you the "Power to Choose". Green Tiger has developed an electric vehicle solution in-house which can be fitted on existing petrol two wheelers - hence giving you the choice to run your existing scooter as EITHER "Electric" or "Petrol". </p>
            </div>
          </div>
          <div className='aboutus-video-container-1'>
            <div className='aboutus-video-container-2'>
                {/* <div className='aboutus-video' style={{backgroundImage:`url(	https://i.ytimg.com/vi_webp/3FPh-F9a7Iw/maxresdefault.webp)`}}></div> */}
                <div className='aboutus-video'><iframe  src="https://www.youtube.com/embed/3FPh-F9a7Iw" title="YouTube video playedvr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
            </div>
          </div>
         </div> 
         {/* style={{aspectRatio:'720/425',width:'100%'}} */}

 
        <div className='aboutus-section-2'>
          <div style={{
            padding:'1rem 0px 0px 0px'
        }}><p className='aboutus-s1-heading aboutus-heading'>GT <span className='aboutus-heading-span-greeen-bolder'>LEADERSHIP</span></p></div>

          <div className='aboutus-leadship-slider'> {/* LEADERSHIP SLIDER */}
              <div className='aboutus-leadship-slider-container' style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center',
                padding:'13rem 0 6rem 0',
                flexDirection:'column'}}>
                  
                  <div className='leadship-slider-card' style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    justifyContent:'space-evenly',
                    }}>

                    <div className='leadship-slider-card-partA position-relative'style={{
                        // height:'15rem',
                        width:'100%',
                        // backgroundColor:'red',
                        display:'flex',
                        // alignItems:'center',
                        justifyContent:'center'

                      }}>
                      <div className='leadship-slider-card-image ' style={{
                        backgroundImage:`url{https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/leadership_members/1.png}`,
                        height:'15rem',
                        width:'78%',
                        borderRadius:'9%',
                        backgroundColor:'purple',
                        border:'4px black',
                        backgroundSize:'contain',
                        backgroundRepeat:'no-repeat'
                      }}>
                      </div>
                    </div>
                      <div className='leadership-leader-name-container position-relative' style={{width:'74%',lineHeight:'3.5rem'}}><p className='leadership-leader-name'>Ashish Dokania</p></div>

                    <div className='leadship-slider-card-partB position-relative' style={{
                        display:'flex',
                        paddingTop:'3rem',
                        width:'100%',
                        justifyContent:'space-evenly'
                        }}>
                      
                        <p style={{fontSize:'1.25rem',lineHeight:'2rem'}}><span>Founder & Chief </span><br></br><span>Executive Officer</span></p>
                        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                          <div className="social-icons" style={{backgroundImage: `url('https://cdn-icons-png.flaticon.com/512/3536/3536505.png')`}}></div>
                        </div>
                      </div>
                  </div>

                  <div className='aboutus-lseadship-button-viewmore' style={{
                    padding:'4rem 0px 0px 0px'}}>
                    <button className='button button-viewmore' style={{}}> VIEW MORE</button>
                  </div>          
              </div>
          </div>
        </div>


        <div className='aboutus-section-3'>
            <div style={{
            padding:'1rem 0px 0px 0px'
            }}><p className='aboutus-s1-heading aboutus-heading'><span className='aboutus-heading-span-greeen-bolder'>MILESTONES </span> & AWARDS</p></div>

            <div className='milestones-timeline-bar'>

            </div>

            <div className='milestones-image-and-content' style={{
              padding:'4rem 0px',
              height:'20rem'
              }}>
              <div style={{
                width:'25%',
                height:'100%',
                border:'2px solid #00AA13'
                }}>
                <div className='milestones-image' style={{
                  backgroundImage:`url{	'https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/logo.png'}`,
                  backgroundSize:'contain',
                  backgroundPosition:'50%',
                  backgroundRepeat:'no-repeat',
                  width:'25%',
                  height:'1rem'
                  }}></div>
              </div>

              <div className='milestones-text-content'>

              </div>
            </div>
        </div>


        <div className='aboutus-section-4'>

        </div>
      </div>
    </div>
  )
}

export default ABOUTUS









// 1).What and hwo to do about the images in 'homepage' seation-2 
// 2).How to do a page laytout or we can say how to build a page becoause I have build my clone webpages by watching the height and width of all the sections so what is the technique or method to build the pages.
      // -(a)should i make the height and width fix(px,rem) 
          // OR
//       -(b)should I use padding, line height, margin to make the size right
          // OR         
//       -(c)assing the size by (a) or (b) dependes on some basis of those tags or what we are using 


// 3).can we use padding,margin,lineheight moast of the times 
// 4).













