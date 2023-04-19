import React from 'react';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faVk, faInstagram} from '@fortawesome/free-brands-svg-icons';
import '../App.css';

const Footer = () => {
  return (
    <div  >
      <footer id='footer'>
        <div className="container col-12 d-flex align-items-center mt-5 pt-3" id='footerCon'>
          <div className="row col-12 d-flex justify-content-end">            
            <div className="col-4">
              <p id='footerText'>Мармеладия - лучше не бывает</p>
            </div>

            <div className="row col-md d-flex justify-content-end">
            <Button id='tgButton' className='mx-2' variant="info"><FontAwesomeIcon id='tgIcon' icon={faTelegram} /></Button>
            <Button id='vkButton' className='mx-2' variant="info"><FontAwesomeIcon id='vkIcon' icon={faVk} /></Button>
            <Button id='igButton' className='mx-2' variant="info"><FontAwesomeIcon id='igIcon' icon={faInstagram} /></Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer