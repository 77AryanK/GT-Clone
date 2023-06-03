import React from 'react'
import '../style/Window.css'

import DisabledByDefaultRoundedIcon from '@mui/icons-material/DisabledByDefaultRounded';
import CurrencyRupeeRoundedIcon from '@mui/icons-material/CurrencyRupeeRounded';
import PercentIcon from '@mui/icons-material/Percent';
import Slider from '@mui/material/Slider';

function SavingCalculator() {
  return (
    <div>
        <div className='window_saving_calculator window_position models-scrollbar1' style={{}}>
        <div className='window_saving_calculator_main_container' style={{borderBottom:'1px solid black'}}>

            <div className='model-closebtn' style={{
              display:'flex',
              justifyContent:'flex-end',
              padding:'1.6rem 0 0 0',
              
              }}> <DisabledByDefaultRoundedIcon style={{
                color: "#198754",
                fontSize:'26px' 
                }}/>
            </div>

            <div className='savingCalc_heading_container'>
                <p className='savingCalc_headin-1' style={{fontSize:'28px',textAlign:'center',}}>CALCULATE SAVINGS BY USING GREEN TIGER VEHICLE</p>
                <p className='savingCalc_heading-2' style={{fontSize:'24px',fontWeight:'bold',lineHeight:'7rem'}}>Input Data to calculate Savings by using Green Tiger Vehicle</p>
            </div>

            <div className='savingCalc_rows'>

              <div className='savingCalc_row-1 ' style={{}}>
                  <div className='display'>
                    <span className='fsize20'>No. of Scooters/Motorcycles Used</span>
                    <span className='fsize20'>1</span>
                  </div>

                  <div className='savingCalc_row-row-1-buttons model-window-btns-container'>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >1</button></div>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >2</button></div>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >3</button></div>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >4</button></div>

                  </div>
              </div>

              <div className='savingCalc_row-2'>
                  
                  <div className='display'>
                    <span className='fsize20'>Average Daily Travel (Kms)</span>
                    <span className='fsize20'>20</span>
                  </div>
                  <div className='EMI-bank-row7-rangeslider' style={{
                    display:'flex',
                    justifyContent:'center'
                    }}> <Slider style={{
                        width:'445px',
                        color:'green'
                        }} defaultValue={0} />
                  </div>
              </div>

              <div className='savingCalc_row-3'>

                  <div className='display'>
                    <span className='fsize20'>Petrol Price (Rs.)</span>
                    <span className='fsize20'>60</span>
                  </div>
                  <div className='EMI-bank-row7-rangeslider' style={{
                    display:'flex',
                    justifyContent:'center'
                    }}> <Slider style={{
                        width:'445px',
                        color:'green'
                        }} defaultValue={0} />
                  </div>
              </div>
                    
              <div className='savingCalc_row-4'>
              <div className='display'>
                    <span className='fsize20'>Years of Usage</span>
                    <span className='fsize20'>1</span>
                  </div>

                  <div className='savingCalc_row-row-4-buttons model-window-btns-container'>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >1</button></div>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >2</button></div>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >3</button></div>
                    <div className='model-window-btns'><button className='window-btn fsize17-bgcolor' >4</button></div>

                  </div>
              </div>
                  <div className='savingCalc-button-calculate-container' style={{
                    textAlign:'right',
                    lineHeight:'4.3rem'
                  }}>
                  <button className='savingCalc-btn-calculate fsize17-bgcolor'>Calculate</button>
                 </div>
            </div>
            
        </div>
      </div>

    </div>
  )
}

export default SavingCalculator