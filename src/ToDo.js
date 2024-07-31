import { useState } from "react"

function TODo(){
    let initialValue={'task':'','completed':false}
    let[todo,settodo]=useState(initialValue)
    let [todos,settodos]=useState([])

const handleChange=(event)=>{
    const {name,value}=event.target
    settodo({...todo,[name]:value})
}
  const handlesubmit=(event)=>{
    event.preventDefault()
    todos.push(todo)
    settodos([...todos])
    settodo(initialValue)
  }
  const handleDelete=(p)=>{
    const updateTOdo=todos.filter((todo)=>todo.task!=p.task)
    //filter all the task expect the one which has to be deleted
    settodos(updateTOdo)
  }
  const toggleCompleted=(td)=>{
      const updateComplete=todos.map((p)=>p.task===td.task?{...p,completed:true}:p)
      console.log(updateComplete)
      settodos(updateComplete)
  }

    return(<>
    <form onSubmit={handlesubmit}>
        <label htmlFor="task"></label>
        <input type="text" name="task" value={todo.task} onChange={(e)=>handleChange(e)}></input>
        <br></br>
        <input type="submit" value="submit"></input>
    </form>
    <ol>
        {todos&& todos.map((p)=><li>{p.task} &nbsp;&nbsp; {p.completed ? 'completed':'Not completed'}
            <button onClick={()=>handleDelete(p)}>Delete</button>
            <button onClick={()=>toggleCompleted(p)}>Update</button>
        </li>)}
    </ol>
    </>)
}
export default TODo