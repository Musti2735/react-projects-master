import React, { useState } from 'react';
import data from './data';
import List from './List';

function App() {

  const [people, setPeople] = useState(data) 

  return <main>
    <section className='container'>
      <h3>{people.length} Birthdays today</h3>  
      <List people={people} />
      <button onClick={()=>setPeople([])} >Clear All</button>
    </section>

  </main>;
}

export default App;
// Data içindeki list öğesine erişmek için useState hooksu kullandık. people değişkenine varsayılan olarak data değerini atadık. h3 etiketi içinde datanın uzunluğunu ekrana yazdırdık. List componentinin içine people değişkenini props olarak tanımladık. Bunu List.js içinde kullanacağız. setPeople ile butona tıklandığında boş liste döndürmesi için tanımlama yaptık. setPeople ile people değişkenine müdahale etmiş olduk.