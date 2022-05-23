import React from "react";
import styles from "./addTask.module.css";
// import data from '../../data/tasks.json';

const AddTask = ({handleTodo ,setTask}) => {
  // NOTE: do not delete `data-cy` key value pair


  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input"
      type="text"onChange={(e)=>{setTask(e.target.value)}}
      placeholder="Enter Todo"/>
      <button data-cy="add-task-button" onClick={handleTodo}>+</button>
    </div>
  );
};

export default AddTask;
