import React, { useState } from "react";

export default function InputField({addNewTodo}){
    const [inputValue, setinputValue]= useState('');

    return(
        <div className="inputcontainer">
            <h2 className="para">You currently have no items in yours list.Click the button below to start planning your day</h2>
            <input className="inputField" value={inputValue} onChange={(e)=>setinputValue(e.currentTarget.value)} placeholder="ENTER TASK NAME" type="text"/>
            <div>
               <button className="inputButton" onClick={()=>{
                addNewTodo(inputValue)
                setinputValue('');
                }}>ADD TASK</button>
            </div>
        </div>
    )
}