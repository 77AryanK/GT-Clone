import React from 'react'
import '../style/Window.css'

import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import PercentIcon from '@mui/icons-material/Percent';
import Slider from '@mui/material/Slider';

function EMIcalculator({open,onCloseEMI}) {
  if(!open) return null
  

  return (
    <div className='model-EMIcalcualtor hidden models-scrollbar2 window_position '>
        <div className='model-EMIcalcualtor-container-1'>

            <div className='model-closebtn' close={onCloseEMI}
              style={{
              display:'flex',
              justifyContent:'flex-end'
              }} ><DisabledByDefaultRoundedIcon 
                style={{
                color: "#198754",
                fontSize:'26px' 
                }}/>
            </div>
            <div className='model-EMIcalcualtor-h1'> <p style={{
              fontSize:'24px', 
              textAlign:'center',
              lineHeight:'7rem'
              }}>Calculate EMI - Bengaluru</p> </div>
            <div >

            <div  > 
                <div style={{
                  display:'flex',
                  justifyContent:'center',
                  }}>
                    <p className='text-bank' style={{
                    fontSize:'17px',
                    borderBottom:'2px solid green' ,
                    width:'6rem',
                    textAlign:'center'
                    }}>Bank</p>
                </div>
              {/* <div className='bank-window-line-container' style={{display:'flex',justifyContent:'center' }}> <div className='bank-window-line' style={{height:'0.6px', backgroundColor:'black', width:'7rem' }}></div> </div> */}


              <div className='model-EMIcalcualtor-bank-main-window' style={{
                border:'0.9px solid black',
                padding:' 0px 17px'
                }} >
                
                <div style={{borderBottom:'1px solid black',padding:'6px 0px 0px 0px' }}>
                  {/*1*/}<div className='EMI-bank-row1 EMI-bank-rows'> <div> <p className='fsize-16'>Conversion Amount</p></div> <div> <p className='fsize-16'> <CurrencyRupeeRoundedIcon className='fsize-16' style={{fontSize:'16px' }}/>55,000</p></div> </div>

                  {/*2*/}<div className='EMI-bank-row2 EMI-bank-rows' ><div > <p className='fsize-16'>GST Rate</p></div> <div> <p className='fsize-16'>16</p></div></div>

                  {/*3*/}<div className='EMI-bank-row3 EMI-bank-rows'><div> <p className='fsize-16'>GST Amount</p></div> <div> <p className='fsize-16'> <CurrencyRupeeRoundedIcon className='fsize-16'/>8,800</p></div></div>

                  {/*4*/}<div className='EMI-bank-row4 EMI-bank-rows'><div> <p className='fsize-16'>Total Amount</p></div> <div> <p className='fsize-16'> <CurrencyRupeeRoundedIcon className='fsize-16'/>63,800</p></div></div>
                </div>
                                                                                  {/* <div className='bank-window-line-container' style={{display:'flex',justifyContent:'center' }}> <div className='bank-window-line' style={{height:'0.6px', backgroundColor:'black', width:'27rem' }}></div> </div>*/}
                                                                                          {/*better way to make a border is to make bottem of a box is to use boerder-bottem  property isted of makin a divtag and making it a line*/}

                <div className='EMI-bank-row5 EMI-bank-rows'><div><p className='fsize-16' style={{lineHeight:'53px'}}>Down payment</p></div> <div><p className='fsize-16'>500</p></div></div>

                <div className='EMI-bank-row7-rangeslider' style={{
                    display:'flex',
                    justifyContent:'center'
                  }}> <Slider style={{
                        width:'445px',
                        color:'green'
                        }} defaultValue={0}/></div>

                <div className='EMI-bank-row7 EMI-bank-rows' style={{paddingTop:'15px'}}><div><p className='fsize-16'>Tenure Range (in months)</p></div> <div><p className='fsize-16'>6 Months</p></div></div>

                <div className='EMI-bank-buttons-container model-window-btns-container'>
                    
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >6 </button></div>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >12</button></div>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >18</button></div>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >24</button></div>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >36</button></div>
                
                </div>
                
              </div>
                <div className='EMI-bank-button-calculate' style={{
                    textAlign:'right',
                    borderBottom:'1px solid black',
                    lineHeight:'4.3rem'
                  }}>
                  <button className='EMI-btn-calculate color-fsize17-bgcolor'>Calculate</button>
                </div>

                <div className='model-EMIcalcualtor-bottom-text' style={{
                    display:'flex',
                    // justifyContent:'space-between',
                    alignItems:'center',
                    padding:'1.5rem 0px 0px 0px',
                    lineHeight:'1.6rem',
                    gap:'1rem'
                    }}>
                  {/* <div> */}
                    <div><p className='fsize-12'>Insurance to be purchased separately. Documentation, hypothecation & processing charges, etc.(approx)</p></div>
                    {/* <div><p className='fsize-12'>hypothecation & processing charges, etc.(approx)</p></div> */}
                  {/* </div> */}
                    <div> <p className='fsize-16' style={{color:'#808080'}}> <CurrencyRupeeRoundedIcon className='fsize-16'/>3222</p> </div>
                </div>
                
                <div className='model-EMIcalcualtor-button-close' style={{
                    textAlign:'center',
                    paddingTop:'10px',
                    paddingBottom:'5px'
                    }}>

                  <button className='closebtn' style={{
                      fontSize:'24px',
                      width:'30rem',
                      height:'52px',
                      backgroundColor:'black'
                    }}>Close</button>
                </div>
              
            </div>  
          </div>
        </div>
      </div>
  )
}

export default EMIcalculator