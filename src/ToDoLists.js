import React from 'react'
import './App.css'


const ToDoLists = (props) => {
   
    return( 
        <>
          <li className='deleteitem'>{props.text}<i className="deleteicon fa-regular fa-trash-can" onClick={()=>{props.onSelect(props.id)}}
          ></i></li>
       </>
    );
}

export default ToDoLists