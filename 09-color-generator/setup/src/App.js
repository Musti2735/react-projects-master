import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
import rgbToHex from './utils';

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(10))

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10)
      setList(colors)

    } catch (error) {
      setError(true)
    }
    setColor("")

  }
  return (
    <>
      <section className="container">
        <h3 className="">Color Generate</h3>

        <form onSubmit={handleSubmit}>
        <label>Enter a HEX code </label>
          <input
            className={`${error ? 'error' : null }`} type="text" placeholder="#f25015" value={color} onChange={(e) => setColor(e.target.value)}
          ></input>
          <button className="btn" type='submit'>Generate</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color,index) => {
         return <SingleColor key={index} {...color} index={index} hexColor={color.hex} />
        })}


      </section>
    </>
  )
}

export default App


/*
İnputa girilen hex değeri ile o rengin açık ve koyu tonlarını ekrana getiren uygulama için,

1-)useState içinde color, error ve list değişkenlerini tanımladık.
color : Kullanıcının girdiği renk için,
error : kullanıcı hatalı giriş yaparsa uyarı vermek için,
list  : rengin açık ve koyu tonlarını liste halinde tutmak için tanımlandı.

kullanıcıdan bilgiyi form kullanarak aldık. inputa bilgi girildiğinde girilen değeri sertColor fonksiyonu ile color değişkenine atanmasını sağladık. 

handleSubmit fonksiyonu içinde formdan gelen veriyi Values (hazır kütüphane) fonksiyonu ile colors olarak bir liste halinde açık ve koyu tonlarını aldık. Toplam 21 liste elemanı.

try - catch bloğu ile eğer kullanıcının girdiği değer istenilen formatta değilse hatayı yakalayıp template litarels ile eğer hata varsa input border'ı kırmızı yaparak uyarı oluşturduk. Bunu yapmamış olsaydık kullanıcı hatalı giriş yaptığında programdan çıkıyor idi.

fonksiyonun en sonunda setColor ile inputa girilen kutucuk içindeki değeri sıfırladık.

list değişkeni olarak tanımladığımız 21 adet öğeyi section içinde singleColor componentine props olarak atadık. list uzunluğu kadar singleColor componenti ekrana gelecek.



*/