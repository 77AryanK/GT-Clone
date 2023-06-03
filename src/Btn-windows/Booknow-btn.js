import React from 'react'
import '../style/Window.css'



function BtnWindows({open,children,onClose}) {
  if(!open) return null
  if(onClose  == true){
    console.log('true');
  }else{
    console.log('false');
  }

  return (
    <div>
    <div className='overlay' onClick={onClose}></div>
      

    <div className='model-booknow hidden models-scrollbar1 window_position'>
        {/* {children} */}
        
        <div className='model-booknow-container-1' style={{}} >
          <div className='text-btn-box1' style={{lineHeight:'4rem'}} >
            <div className='text-btn-box2' S
              style={{
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-between',
                lineHeight:'1rem',
                zIndex:'53px'
                // alignItems:'center',
              }}>
                <p style={{fontSize:'28px'}}>Book A Test Ride</p>
                
                <button className="close-model" onClose={onClose}>&times;</button>
            </div>
            <p style={{fontSize:'16px'}}>Experience Dual Powertrain</p>
          </div>
          <div>
            <form className='model-booknow-form'>
              <div> <input  className='booknow-input' type='text' placeholder='Enter Your Name'/> </div>
              <div> <input  className='booknow-input' type='text' placeholder='Phon Number'/> </div>
              <div> <input  className='booknow-input' type='text' placeholder='City'/> </div>
              <div> <input  className='booknow-input' type='text' placeholder='Vehicle Type'/> </div>
              <div> <input  className='booknow-input' type='text' placeholder='Model'/> </div>
              <div> <input  className='booknow-input' type='text' placeholder='Year'/> </div>
              <div> <button className='booknow-submitbtn'>Submit</button> </div>
            </form>
          </div> 
        </div>
      {/* <div className='overlay hidden'></div>  */}

      </div>
    </div>
  )
}

export default BtnWindows






