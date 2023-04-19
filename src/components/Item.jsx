import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const Item = (props) => {
  return (
    <div className='conteiner py-3 col-4'>
    <main>
        <div className='row justify-content-evenly 
        row-cols-12 text-center mx-5'>
            <div className='col px-3 py-3'>
                <div className='card md-6' id='card'>
                    <div className='card-body py-2 px-3' id='cardTop'>                        
                        <p id='cardText'>{props.title}</p>                        
                    </div>
                    <div className='card-img'>
                      <img className='' src={props.img} width={'100%'}></img>
                    </div>

                    <div className='card-body' id='cardBottom'>
                      <div className='row col-12'>
                        <div className='col-10'>
                          <p id='cardText'>{props.price}</p>
                        </div>
                        <div className='col-2 pr-5'>                            
                          <Button className='btn btn-dark' id='bannerButton'><FontAwesomeIcon icon={faPlus} /></Button>
                        </div>
                      </div>
                      
                      
                    </div>

                </div>

            </div>
        </div>
    </main>
    </div>
  )
}

export default Item