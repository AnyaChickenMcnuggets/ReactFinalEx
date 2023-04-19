import React from 'react';
import Item from './Item';

const CardItem = (props) => {
  return (
    <div className='conteiner  py-3'>
  
      <div className='col-12 row'>
      { 
          props.item.map(obj=>{
            return(
              <Item
              key={obj.id}
              id={obj.id}
              myId={obj.myId}
              title={obj.title}           
              price={obj.price}
              img={obj.img}
              />
            )
          })
        }
      </div>
    
    </div>
  )
}

export default CardItem