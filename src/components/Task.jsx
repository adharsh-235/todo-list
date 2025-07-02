
import Card from "./card";
import { useEffect, useState } from "react";

const Task = () => {
  const initial_task = []
    ;
  const [Tasks, setTasks] = useState(initial_task);
  const addTaskHandler = async (newTask) => {
    let newTaskObj = {
      task_id: Math.random(),
      task_name: newTask

    };
    const response =await fetch("https://todo-list-backend-c4ql.onrender.com/create",{
      method:"POST",
      headers:{

        "Content-Type":"application/json"
      },
      body: JSON.stringify(newTaskObj),
    })
    if (response.status ===201){
      getTasks();
      alert("New task Added successfully")
    }
    else{
      alert("Failed to add Task")
    }
    
    
  }

  const deleteTaskHandler = async (taskId) => {

   const response =await fetch("https://todo-list-backend-c4ql.onrender.com/"+taskId,{
        method:"DELETE"
      })
      if (response.status == 200){

        getTasks();
        alert("Task Deleted")

      } 
      else{
               alert("Failed to Delete Task")

      }
    

  }

  const getTasks = async () => {
     const response =await  fetch("https://todo-list-backend-c4ql.onrender.com/")
     const taskList = await response.json();
      console.log(response);
      setTasks(taskList);
    }

    useEffect(() => {

      getTasks();
    }, [])

  return (
    <div id='tasks'>
      <Input onAddTask={addTaskHandler} />

      {
        Tasks.map((task) => (

          <Card data={task}
            onDeleteTask={deleteTaskHandler}
          />

        ))
      }




    </div>)
}
export default Task;