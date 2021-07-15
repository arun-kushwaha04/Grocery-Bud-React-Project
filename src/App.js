import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState('');
  const [alert,setAlert] = useState(false);
  const [isEditing,setIsEditing] = useState(false);
  const [editID,setEditID] = useState(null);
  return <section className="section-center">
    <form className="grocery-form">
      {alert && <Alert/>}
      <h3>Grocery List</h3>
      <div className="form-control">
        <input type="text"
          className="grocery"
          value={name}
          onChange={(e)=>setName(e.target.value)}
          placeholder="e.g. bread"
        />
        <button type="submit" className="submit-btn">
          {isEditing?'Edit':'Add'}
        </button>
      </div>
    </form>
    <div className="grocery-container">
      <List list={list}/>
      <button className='clear-btn'>clear button</button>
    </div>
    </section>
}

export default App
