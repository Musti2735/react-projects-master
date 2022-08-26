import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { Button } from 'bootstrap';

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({msg:"", show:false, type:''});

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!name){ //eğer isim yoksa alert
      // display alert
    }
    else if(name && isEditing){ // eğer isim var ve editing ture ise edit
  
    }
    else{
      // show alert
      // create new item
      const newItem={id: new Date().getTime().toString(), title: name} // kullanıcının girdiği text'i alıp eşsiz id oluşturarak bir obj içine koyduk.
      setList([...list, newItem]) //list öğesine aldık ve newItemı ekledik.
      setName("") //subnitten sonra input değerini sıfırladık
   

      
    }

  }

  return (
    <section className="section-center">
      <form className="gorcery-form" onSubmit={handleSubmit} >
      {alert.show && <Alert/>}
      <h3>Grocery Bud</h3>
      <div className="form-control">
      <input 
      type="text" 
      className="grocery"
      value={name}
      onChange={(e)=>setName(e.target.value)} //hedefteki değeri name değişkenine atadık.
      placeholder = 'Eggs..'
      />
      <button type="submit" className="submit-btn">
        {isEditing ? "edit" : "submit"}
      </button>
      </div>

      </form>
      {list.length>0 &&( //liste boş değilse clear items butonunu göster
      <div className="grocery-container">
      <List items={list}/>
      <button className="clear-btn">Clear Items</button>
    </div>
      )}
    </section>
  )
}

export default App
