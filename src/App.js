import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';
import React , {useState, useEffect} from 'react';
import {AddTodo} from "./MyComponents/AddTodo";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";


function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos")); 
  }
  const onDelete = (todoa)=>{
    console.log("I am onDelete of todo",todoa);
    setTodos(todos.filter((e)=>{
      return e!==todoa;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc)=>{
    console.log("I am adding this task", title, desc)
    let sno;
    if(todos.length==0){
      sno = 1;
    }
    else{
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
    <BrowserRouter>
     <Header title="MyTodoList" searchBar={false}/>
     <AddTodo addTodo={addTodo}/>
     <Todos todos={todos} onDelete={onDelete}/>
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
