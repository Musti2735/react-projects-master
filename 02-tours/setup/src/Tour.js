import React, { useState } from 'react';

const Tour = ({ id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false)

  return <article className='single-tour'>
    <img src={image} alt={name} />
    <footer>
      <div className='tour-info'>
        <h4>{name}</h4>
        <h4 className='tour-price'>$ {price}</h4>
      </div>
      <p>{readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>{readMore ? 'Show Less' : 'Read More'} </button>
      </p>
      <button onClick={() => removeTour(id)} className='delete-btn'>Not Interested</button>
     
    </footer>

  </article>
};

export default Tour;


/* 
tour companentimizin içinde verimizin id,imae,info,price, name değerlerini yani propsları tanımladık.
removeTour propsunu  da onClick için tanımladık ve id parametresini verdik. readMore değişkeninde true false değer kontrolü ile butona tıklandığında açılır kapanır toogle yaptık.

*/