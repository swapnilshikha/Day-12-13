import React from 'react'
import {useState, useEffect } from 'react'

// const TodoComp = ({todo,status}) => {
//     console.log(todo, status, delFun,id);
//   return (
//     <div>
//         <h1>{todo}</h1>
//         <h1>{status}</h1>
//         <button onClick={()=> delFun(id)}> Delete </button>
//         <biutton onClick={()=> update(id)}> Update </biutton>
//     </div>
//   )
// }

const TodoComp = () => {

    const [todoArr, setTodoArr] = useState([])

    async function getData()
    {
        let res = await fetch('://localhost:3000/todo');
        let data = await res.json();
        //console.log(data);
        setTodoArr(data)
    }

    async function del(id){
        try{
            let res = await fetch(`http://localhost:3000/todo/${id}`,{
                method : "DELETE"
            })
            console.log(id);
        }
        catch(error){
            console.log(error);
        }
        
    }
    
    useEffect(()=>{
        getData();
    }, [todoArr])

    return (
        <div> 
            {
                todoArr.map((el)=>(
                    <div>
                        <h1>{el.todo}</h1>
                        <h1>{el.isCompleted? "Completed" : "Not Completed"}</h1>
                        <button onClick={()=> del(el.id)}> Delete </button>
                    </div> 
                ))
            } 
        </div>
    )
}
export default TodoComp




