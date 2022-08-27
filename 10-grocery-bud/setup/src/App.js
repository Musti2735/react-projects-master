import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import { Button } from 'bootstrap';

function App() {
  const [list, setList] = useState([]);
  const [name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({ show: false, msg: "", type: '' });

  // create new item
  const newItem = { id: new Date().getTime().toString(), title: name } // kullanıcının girdiği text'i alıp eşsiz id oluşturarak bir obj içine koyduk.
  const handleSubmit = (e) => {
    e.preventDefault();


    if (!name || name.length < 3) { //eğer name değeri yoksa veya değer 3 den kısa ise alert
      showAlert(true, "please enter value", 'danger')
    }
    else if (name && isEditing) { // eğer isim var ve editing ture ise edit
      setList(list.map((item)=>{
        if(item.id==editId){
          return {...item, title:name}
        }
        return item
      }))
      setName('')
      setEditId(null)
      setIsEditing(false)
      showAlert(true, `${newItem.title} edited`, 'success')
    }
    else {

      setList([...list, newItem]) //list öğesine aldık ve newItemı ekledik.
      showAlert(true, `${newItem.title} added`, 'success')
      setName("") //subnitten sonra input değerini sıfırladık      
    }
  }

  const showAlert = (show = false, msg = "", type = '') => {
    setAlert({ show, msg, type })
  }
  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    showAlert(true, `${newItem.title} removed`, 'success')
  }

  const editItem =(id)=>{
    const editingItem = list.find((item)=>item.id===id)
    setIsEditing(true)
    setEditId(id)
    setName(editingItem.title )
  }

  return (
    <section className="section-center">
      <form className="gorcery-form" onSubmit={handleSubmit} >
        {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />}
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            value={name}
            onChange={(e) => setName(e.target.value)} //hedefteki değeri name değişkenine atadık.
            placeholder='Eggs..'
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "edit" : "submit"}
          </button>
        </div>

      </form>
      {list.length > 0 && ( //liste boş değilse clear items butonunu göster
        <div className="grocery-container">
          <List items={list} remove={removeItem} editItem={editItem}/>
          <button onClick={() => { showAlert(true, 'All İs gone', 'success'); setList([]) }} className="clear-btn">Clear Items</button>
        </div>
      )}
    </section>
  )
}

export default App
