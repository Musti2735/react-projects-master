import React, { useState, useEffect } from 'react'

const SingleColor = ({rgb, weight, index, hexColor}) => {
const [alert, setAlert] = useState(false)

const bcg = rgb.join(",")  
const hexValue = `#${hexColor}`

useEffect(()=>{
  const timeout = setTimeout(()=>{
    setAlert(false)
  }, 3000)
  return () => clearTimeout(timeout)
}, [alert])

  return (

     <article onClick={()=>{
       setAlert(true);
    navigator.clipboard.writeText(hexValue)
    } }
     className={`color ${index>10 && 'color-light'} `} style={{backgroundColor:`rgb(${bcg})`}} >
     <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hexColor}</p>
      {alert && <p className="alert">Copied to clipboard
      </p>}

    </article>
  )

}

export default SingleColor

/*

props olarak, app.js'den gelen color objesi içinde rgb weight ve index propslarını ayrı ayrı aldık. hexColor ise app.jsde tanımladığmız başka bir değişken. Bu değişken ile hex kodunu sayfada kullanıcıya sunacağız.

propsları article içinde kullanarak ekrana yazdırdık. rgb propsunu string haline getirerek bcg değişkenine atadık. her bir componentin bacground değerini template litarels içinde tanımlayarak bcg değerini buruda kullandık. Böylelikle her bir rgbye göre farklı renkleri ekrana getirmiş olduk. index değerini if koşuluna sokarak eğer index 10dan büyükse yani arkaplan rengi koyu ise üzerindeki yazıların renginin beyaza olmasını sağladık.

article öğesinin üzerine tıklandığında hex kodunun kopyalanabilmesi için alert değişkeni tanımladık. alertin varsayılan değeri false. eğer alert true ise kopyalandı yazısını kutucuğa getirdik. Ve ardından timeOut ile 3 sn sonra kopyalandı yazısının kaldırılmasını sağladık. 

*/