import React, { useState } from 'react';
import data from './data';

function App() {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (count <= 0) {
      amount = 1;
    }
    if (count > 8) {
      amount = 8;
    }
    setText(data.slice(0, amount));
  }

  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>generate</label>
        <input
          type="number"
          name='amount'
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button className='btn'>generate</button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>

    </section>
  )
}

export default App;


/*

Data içinde 8 öğeden oluşan bir text listemiz var. Kullanıcının 0-8 arasında girdiği değer kadar paragrafı ekranda yazdırmak için,

data içindeki text değerimizi ve kullanıcının giriş yapacağı paragraf sayısını useState ile tanımladık.

Kullanıcının girdiği değeri bir form ile alıyoruz. Form return ettiğimiz için onSubmit değerine bir handleSubmit adında bir fonksiyon atadık. Bu fonksiyon ile değer kontrolü yaptıktan sonra setText ile text değerimizi manipule ediyoruz ve kullanıcını girdiği değere kadar listeyi slice ediyoruz. Böykelikle 8'e kadar kaç değeri girilirse text değişkenimizi 0 ile girilen değer kadar oluyor. Ekranda girilen değer str olduğu için parseInt ile numbera çeviriyoruz.

input için  onChange ile o an girilen değeri alıp setCount ile count değişkenine tanımlıyoruz.

slice ile manipule edilen text değişkenini map fonksiyonu ile ekranda göstermek için return ediyoruz.

*/