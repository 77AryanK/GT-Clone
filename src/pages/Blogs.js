import React from 'react'
import "../style/Blogs.css"


function Blogs() {
  return (
    <div className='blogs-page'>
        <div className='blogs-containera'>
            <div className='blogs-containerb'>
                <div className='blogbox'>
                    <p className='blog-heading' style={{fontSize:'2.5rem',lineHeight:'8rem',padding:'0px 0px 0px 3rem'}}>Green Tiger-Blogs</p>
                    <div className='blog--imgtext' style={{display:'flex',justifyContent:'space-evenly'}}>
                        <div className='blog-img' style={{backgroundImage:`url(	https://s3.ap-south-1.amazonaws.com/greentiger.in-content/website_3_0/milestone_icon/43.svg)`}}></div>
                        <div className='blog-text' style={{width:'50%'}}>
                          <p className='blog-text1' style={{fontSize:'1.25rem',fontWeight:'bolder',lineHeight:'5rem'}}>GT Conversion Process</p>
                          <p className='blog-text2' style={{lineHeight:'1.5rem',width:'90%'}}>Over the past few months of exhibiting Dual Powertrain scooters to different people, we have always observed that most people are intrigued when they see a vehicle (like their favourite Activa) run on both Petrol & Electric on Bangalore roads</p>
                        </div>
                    </div>
                </div>
                <div className='updates'>
                  <p className='latest-update-text' style={{fontSize:'1.5rem',lineHeight:'3.2rem'}}>Latest Upadte</p>
                  <li className='updates-list' style={{lineHeight:'6.2rem'}}>GT Conversion Process</li>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blogs