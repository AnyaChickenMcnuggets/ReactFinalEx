import React from 'react'
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import '../App.css';

const Banner = () => {
  return (
    <div id='banner' className='d-flex align-items-end'>      
      
      <div className='col-11 row d-flex justify-content-end mb-5'>
        
        <div className='col-3'>
          <div id='bannerCon' className='col-12 mt-5'>
            <p id='bannerText' className='p-3 text-center'>Набор на Halloween      <span className="badge rounded-pill text-bg-danger">New</span></p>
            <div className='row col-12 mb-5'>
              <div className='col-md mb-2'>
                <p id='bannerText' className='p-2 mx-2 text-center'>1199 руб.</p>
              </div>
              <div className='col-2 m-1'>
                <Button className='btn btn-dark' id='bannerButton'><FontAwesomeIcon icon={faPlus} /></Button>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default Banner