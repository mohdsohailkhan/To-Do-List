import React from "react";
export default function TodoList({todos,deleteTodo}){
    return(
        <div style={{display:'flex',justifyContent:'center',}}>
            <ul style={{textAlign:'left'}}>
            {
                todos.map((item,index)=>{
                    return(
                        <li key={index} style={{marginTop:'10px'}}>
                            {item}
                            <button style={{marginLeft:'15px', width:'10rem',background:'green',padding:'0.5rem',color:'white',cursor:'pointer'}} onClick={()=>deleteTodo(item)}>Done</button>
                        </li>
                    );
                })
            }
            </ul>
        </div>
    )
}