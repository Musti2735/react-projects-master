import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, info } = people[index]

  const checkNumber = (num) => {
    if (num > people.length - 1) {
      return 0
    }
    else if (num < 0) {
      return people.length - 1
    }
    return num
  }

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex)
    })
  }
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex)
    })
  }
  const randomPerson = () => {
    setIndex((index) => {
      let newIndex = Math.floor(Math.random() * people.length)
      return newIndex
    })
  }

  return <article className='review'>
    <div className='img-container'>
      <img src={image} alt={name} className="person-img"></img>
      <span className='quote-icon'>
        <FaQuoteRight />
      </span>
    </div>
    <h4 className='author'>{name}</h4>
    <p className='job'>{job}</p>
    <p className='info'>{info}</p>

    <div className='button-container'>
      <button className='prev-btn' onClick={prevPerson}>
        <FaChevronLeft />
      </button>
      <button className='next-btn' onClick={nextPerson}>
        <FaChevronRight />
      </button>
    </div>

    <div className='button-container'>
      <button className='random-btn' onClick={randomPerson}>
        Suprise Me !
      </button>
    </div>
  </article>
};

export default Review;



/*Data.js içinden people propsunu aldık. useStata ile Varsayılan değer olarak people[index] tanımladık. İndex numarasını listenin kaçıncı öğresini alacaksak ona göre belirlenecek. Bu sebeple index numarasını tutması için bir useState tanımlayıp varsayılan değerini 0 olarak belirledik.

person içinden name, job, info, img değerlerini alıp ekrana yazdırdık. liste elemaları arasında geçiş yapabilmek için 3 adet buton tanımladık. ileri geri ve random. bu butonlar için ayrı ayrı, ileri için index değerini 1 artıran, geri için index değerini 1 eksilten, random için ise Math methodu ile random sayı veren birer fonksiyon tanımladık.
ayrıca index değerimiz 0 - 3 arasında olması gerektiği için chechNumber isimli bir fonksiyon tanımlyarak sayınnın bu değerler arasında kalmasını sağladık.
*/