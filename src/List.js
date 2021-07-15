import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({items,removeListItem,editListItem}) => {
  return (
    <div className="grocery-list">
      {items.map((element)=>{
        return(
          <article className="grocery-item" key={element.id}>
            <p className="title">{element.title}</p>
            <div className="btn-container">
              <button type="button" className="edit-btn" onClick={()=>editListItem(element.id)}>
                <FaEdit/>
              </button>
              <button type="button" className="delete-btn" onClick={()=>removeListItem(element.id)}>
                <FaTrash/>
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
