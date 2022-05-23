import React,{useState} from "react";
import styles from "./counter.module.css";

const Counter = ({count}) => {
  // sample value to be replaced
  const[counted,setCounted]=useState(count);
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>

      <button data-cy="task-counter-increment-button"
      onClick={()=>{setCounted(counted+1)}}>+</button>
      <span data-cy="task-counter-value">{counted}</span>
      <button data-cy="task-counter-decrement-button"
      onClick={()=>{ if(counted!==0){setCounted(counted-1)}}}>-</button>
    </div>
  );
};

export default Counter;
