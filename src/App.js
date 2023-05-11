import './App.css';
import React, { useState } from 'react';
import {IoAddOutline } from "react-icons/io5";

function App() {
  const [Item, setItem] = useState("Apple")
  const handleInputText = (event)=>{
    setItem(event.target.value);
  };
  const [ItemList, setItemList] = useState([]);

  const handleAddItem = ()=>
  {
     setItemList((olditem)=>{
        return [...olditem,Item];
     });
  };
  return (
    <>
      <h1>ToDOList</h1>
      <input type="text" placeholder='type here' 
      onChange={handleInputText}
      value={Item} />
      <button className='btn' onClick={handleAddItem} ><IoAddOutline/></button>
      <ul>
        {
          ItemList.map((itemVal)=>{
            return <li>{itemVal}</li>;
          })
        }
      </ul>
    </>
  );
}

export default App;
