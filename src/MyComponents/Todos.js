import React from 'react'
import {Todo} from './Todo';
const myStyles={
  minHeight:"100vh"
}
export const Todos = (props) => {
  return (
    <div className='container my-4' style={myStyles}>
      <h2 className='text-center' >
        Todo List
      </h2>
      <br />
      {props.todos.length===0? <div className='text-center'>No tasks to display</div> : 
        props.todos.map((todoa)=>{
          return (<Todo todoa={todoa} key={todoa.sno} onDelete={props.onDelete}/>)
        })}
      
    </div>
  )
}
