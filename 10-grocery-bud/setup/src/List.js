import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { CardTitle } from 'reactstrap'
const List = ({ items, remove, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { title, id } = item;
        return (
          <article key={id} className='grocery-item'>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <FaEdit className='edit-btn' onClick={()=>editItem(id)} />
              <FaTrash className='delete-btn' onClick={()=>remove(id)}/>
            </div>
          </article>
        )

      })}
    </div>
  )
}

export default List
