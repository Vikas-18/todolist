import './App.css';
import React, { useState } from 'react';
import ToDoLists from './ToDoLists';

function App() {
  const [Item, setItem] = useState("")//usestate hook is used for changing the state
  const handleInputText = (event)=>{
    
    setItem(event.target.value);//taking text from input field
    
  };
  const [ItemList, setItemList] = useState([]);//storing the value in a array

  const handleAddItem = () => {
    if (Item.trim() === "") {
      // If the item value is empty or only contains whitespace, return without adding the item
      return;
    }
  
    setItemList((olditem) => {
      return [...olditem, Item];
    });
    setItem('');//after adding it the list the input field become empty
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleAddItem();
    }
  };

  const handleDelete = (id) =>
  {
  
      setItemList((olditem) => {
        return olditem.filter((arrEle,index)=>{//this is doing flitration on the basis of logic written
          return index!==id;
        })
      });
  }
  
  return (
    <>
      <h1 className='title'>To DO List</h1>
      <div className='inputfield'><input className='ip' type="text" placeholder='Type Here' 
      onChange={handleInputText} onKeyDown={handleKeyDown}
      value={Item} /> <i className="addicon fa-sharp fa-solid fa-plus fa-beat-fade" onClick={handleAddItem} ></i></div>
  
      <ul >
        {
          ItemList.map((itemVal,index)=>{
            return <ToDoLists 
            text={itemVal} 
            key={index} 
            id={index}
            onSelect={handleDelete}/>
          })
        }
      </ul>
    </>
  );
}

export default App;
