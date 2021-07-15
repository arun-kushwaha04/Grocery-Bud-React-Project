import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

const getListFromLocalStorage = ()=>{
  let list = localStorage.getItem('list');
  if(list){
    return JSON.parse(list);    
  }
  return [];
}

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState(getListFromLocalStorage());
  const [alert,setAlert] = useState({show:false,msg:'',type:''});
  const [isEditing,setIsEditing] = useState(false);
  const [editID,setEditID] = useState(null);

  //function to submit form
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(!name){
      //error handling
      showAlert(true,'Enter Grocery Name','danger');
    }
    else if(isEditing){
      //to do
      showAlert(true,'item updated','success');
      setIsEditing(false);
      setEditID(null);
      setName('');
      setList(list.map(element =>{
        if(element.id === editID){
          element.title = name;
        }
        return element;
      }));

    }
    else{
      showAlert(true,'Item Added','success');
      const newItem = {id:new Date().getTime().toString(), title:name}
      setList([...list,newItem]);
      setName('');
    }
  }
  const showAlert = (show=false,msg='',type='') =>{
    setAlert({show,msg,type});
  }
  const clearList = ()=>{
    setList([]);
    showAlert(true,'List Empty','danger')
  }
  const removeListItem = (id)=>{
    showAlert(true,'Item Removed','danger')
    setList(list.filter(element => {
      return element.id !== id;
    }));
  }
  const editListItem = (id)=>{
    setIsEditing(true);
    setEditID(id);
    const item = list.find((element)=>{ return element.id === id})
    setName(item.title);
  }
  useEffect(()=>{
    localStorage.setItem('list', JSON.stringify(list));
  },[list]);
  return <section className="section-center">
    <form className="grocery-form" onSubmit={handleSubmit}>
      {alert.show && <Alert alert={alert} removeAlert={showAlert} list={list}/>}
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
    {list.length>0 && 
      <div className="grocery-container">
        <List items={list} removeListItem={removeListItem} editListItem={editListItem}/>
        <button className='clear-btn' onClick={clearList}>clear button</button>
      </div>    
    }
    </section>
}

export default App
