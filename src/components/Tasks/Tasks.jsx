import React from "react";
import styles from "./tasks.module.css";
import Task from '../Task/Task';

const Tasks = ({data}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
        {/* Task List */}
        {data.map(item=>
          <Task {...item} key={item.id}/>  
        )}
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
        {/* <h1>Empty</h1> */}
      </div>
    </>
  );
};

export default Tasks;
