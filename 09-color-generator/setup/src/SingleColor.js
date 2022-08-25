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

props olarak, app.js'den gelen color objesi içinde rgb weight ve index propslarını ayrı ayrı aldık. hexColor ise app.jsde tanımladığmız başka bir değişken 

*/