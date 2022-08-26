import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import { CardTitle } from 'reactstrap'
const List = ({ items }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { title, id } = item;
        return (
          <article key={id} className='grocery-item'>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <FaEdit className='edit-btn' />
              <FaTrash className='delete-btn' />
            </div>
          </article>
        )

      })}
    </div>
  )
}

export default List
