import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import './index.css'


const url = 'https://course-api.com/react-tours-project'

function App() {
  const [mode, setMode] = useState('light')

  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTour = tours.filter((tour) => tour.id != id)
    setTours(newTour)
  }

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours)
      console.log(tours)
    } catch (error) {
      setLoading(false);
      console.log(error)

    }
  };
  useEffect(() => {
    fetchTours();
  }, []);


  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }

  if (tours.length === 0) {
    return <main>
      <div>
        <label className="switch">Buton
          <input type="checkbox"></input>
            <span className="slider"></span>
        </label>
      </div>
      <div className='title'>
        <h2>No Tours Left</h2>
        <button className='btn' onClick={fetchTours} >Refresh</button>
      </div>
    </main>
  }


  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App


/*
Projede App.js, Tour.js ve Tours.js dosyaları bulunmaktadır.

App.js dosyasında, tour değişkenimizi useState ile tanımladık. tours verisini fetch ile aldık. 

loading değişkenini ise fetch ile çağırdığımız veri yüklenirken ekrana "loading.." yazdırmak için tanımladık ve true false değerini kontrol ederek, eğer veri gelmemişse ekrana yazdırdık. verimizi, hata olması durumunda yakalayabilmek için try catch bloğu içinde yazdık.

useEffect ile sayfa yüklendiğinde fetchTours() fonksiyonunu çağırdık.

removeTour fonksiyonu ile tour companentinde tanımlanan butona tıklandığında ilgili kartın listeden çıkarılmasını sağladık.


*/