import React from 'react';
import { useState } from 'react'
import DarkMode from './DarkMode';
import Review from './Review';
import './index.css';

function App() {
  const [mode, setMode] = useState('light');

  const changeMode =()=>{
    let selectedMode = mode==='light' ? 'dark' : 'light'
    setMode(selectedMode)
    console.log(selectedMode)
    document.documentElement.setAttribute('data-theme',{selectedMode})
  }


  return <main>
    <div>
      <DarkMode mode={mode} changeMode={changeMode}/>
    </div>
    <div className='container'>
      <div className='title'>
        <h2>Our Reviews</h2>
        <h2 className='underline'></h2>
        <Review/>
      </div>
    </div>


  </main>
}

export default App;


/*Reviews Componentini app.js içinde kullandık.
 
*/