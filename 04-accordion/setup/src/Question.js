import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({title, info}) => {

  const [showInfo, setShowInfo] = useState(false)

  return <article className='question'>
    <header>
      <h4>{title}</h4>
      <button onClick={()=>setShowInfo(!showInfo)} className='btn'>{showInfo ? <AiOutlineMinus/> : <AiOutlinePlus />}</button>
    </header>
    {showInfo && <p>{info}</p>}

  </article>
};

export default Question;


/*

useState kullanarak true ve false değerlerini kullanmak için showInfo değişkenini tanımladık.

butona tıklandığında setShowInfo fonksiyonu ile showInfo değerini değiştirdik. App.js'den aldığımız title ve info propslarını ekranda yazdırdık.

*/