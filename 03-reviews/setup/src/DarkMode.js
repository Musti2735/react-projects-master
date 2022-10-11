import './index.css'
import React from 'react'



const DarkMode = ({changeMode, mode})=>{


    return(<>
        <div className='toggle-theme-wrapper'>
            <span>light</span>
            <label className='toggle-theme' htmlFor=',
            checkbox'>
                <button
                onClick={changeMode}
                type='submit'
                id='checkbox'>buton</button>
                <div className='slider round'></div>
            </label>
            <span>Dark</span>
        </div>
    </>
    )

}


export default DarkMode;