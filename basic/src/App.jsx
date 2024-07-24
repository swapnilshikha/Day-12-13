import { useState } from 'react'
import React from "react"
import TodoComp from './components/TodoComp';
import UseEffect from './components/UseEffect';

//import Button from './components/Button'

function App() {

  const [todo, setTodo] = useState("");
  //let arr = JSON.parse(localStorage.getItem("todoArr")) || []
  //const [todoArr, setTodoArr] = useState(arr);
  const [todoArr, setTodoArr] = useState([]);

  

  function pushData(){

    let todoObj = {
      id: Math.random()+Date.now()+todo,
      todo: todo,
      isCompleted: false
    }
  setTodoArr([...todoArr, todoObj]);  //destructure and Add
  console.log(todoArr);           //print 
  }

  function handleDel(id){
    console.log(id);
    let newTodoArr = todoArr.filter((el) => el.id !== id); //if the passed id does match it will save orelse it will ignore
    setTodoArr(newTodoArr);   //replace the array with new one
  }

  function update(id)
  {
    let updatedArr = todoArr.map((el)=>{
      return el.id === id ? {...el, isCompleted : !el.isCompleted} : el;  //it will return object, 1st cond- will return updated obj, 2nd cond- will return whole obj.
    })
    setTodoArr(updatedArr);
  }

  return (
    <>
     <input type="text" name="" id="" placeholder="ADDD TODO LIST" onChange={(e)=>{setTodo(e.target.value)}} />
     <button onClick={pushData}> Click  </button>
      {
         todoArr.map((el)=>(
          <div>

            <TodoComp 
            id={el.id} 
            todo={el.todo} 
            status={el.isCompleted} 
            delFun={handleDel} 
            updFun={update}
            />

          

          </div>
        ))}
      <UseEffect />
    </>
  )

}
export default App

// function handlerFunction(){
//   console.log(" C Pressed");
// }
// <input placeholder="Enter" onKeyDown={(e)=> {
//   if(e.key === "c") handlerFunction();   //whenever c is pressed fun is called
// }} />