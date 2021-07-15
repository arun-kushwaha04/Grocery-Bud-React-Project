import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState([]);
  const [alert,setAlert] = useState({show:false,msg:'',type:''});
  const [isEditing,setIsEditing] = useState(false);
  const [editID,setEditID] = useState(null);

  //function to submit form
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name){
      //error handling
    }
    if(isEditing){
      //to do
    }
    else{
      const newItem = {id:new Date().getTime().toString(), title:name}
      setList([...list,newItem]);
      setName('');
    }
  }
  const showAlert = (show=false,msg='',type='') =>{
    setAlert(show,msg,type);
  }
  return <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert/>}
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
      <List items={list}/>
      <button className='clear-btn'>clear button</button>
    </div>
    </section>
}

export default App
