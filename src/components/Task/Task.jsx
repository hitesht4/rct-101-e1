import React,{useState}from "react";
import styles from "./task.module.css";
import Counter from "../Counter/Counter";

const Task = (props) => {
  // NOTE: do not delete `data-cy` key value pair
  const [completed,setCompleted]=useState(props.done);
  return (
    <li data-cy="task" className={styles.task}>
      <input 
      type="checkbox" 
      data-cy="task-checkbox" 
      onChange={(e)=>{setCompleted(e.target.checked)}}/>

      <div 
      data-cy="task-text"
      style={{textDecoration:completed?"line-through":"none"}}>
        {props.text}
      </div>

      {/* Counter here */}
      <Counter count={props.count}/>
      <button 
      data-cy="task-remove-button"
      className={styles.btn}>
        Delete
      </button>
    </li>
  );
};

export default Task;
