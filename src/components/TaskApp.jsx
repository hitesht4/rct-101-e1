import React,{useEffect, useState} from "react";
import AddTask from "./AddTask/AddTask";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import Tasks from "./Tasks/Tasks";
import data from '../data/tasks.json';

const TaskApp = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [task,setTask]=useState("");
  const [todos,setTodos]=useState([...data]);
  const [totalTask,setTOtalTask] = useState(todos.length);
  const [unCompletedTask,SetunCompletedTask]=useState(0);
  
  const handleTodo=()=>{
     let taskObj={  
    "id": todos.length+1,
    "text": task,
    "done": false,
    "count": 2
     }
    let flag=false; 
    for(let i=0;i<todos.length;i++){
      if(task===todos[i].text){
        flag=true;
        break;
      }
    }
     if(taskObj.text!=="" && !flag){
        setTodos([...todos,taskObj]);
        setTOtalTask(totalTask+1);
     }

  }
  const countUnc=()=>{
    let c=0;
    for(let i=0;i<todos.length;i++){
      if(todos[i].done===true){
         c++;
      }
    }
    SetunCompletedTask(todos.length-c);
  }
  const handleDelete=(id)=>{
        let newTodo=todos.filter(item=>{
            return item.id !== id;
        })
        setTodos(newTodo);   
    }
  useEffect(()=>{
    countUnc()
  });

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      {/* Header */}
      {/* Add Task */}
      {/* Tasks */}
      <TaskHeader  totalTask={totalTask} unCompletedTask={unCompletedTask}/>
      <AddTask handleTodo={handleTodo} setTask={setTask}/>
      <Tasks data={todos} handleDelete={handleDelete}/>
    </div>
  );
};

export default TaskApp;
