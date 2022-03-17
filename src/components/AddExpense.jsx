import { useState } from "react";
import { useContext } from "react";
import classes from "./AddExpense.module.css";
import context from "./store/context";


const AddExpense = () => {
    const{items,total} = useContext(context);
    const [expense,setExpense]=useState('');
    
    const formSubmitHandler=(e)=>{
        e.preventDefault();
    }

  return (
      
    <form className={classes.expense_container} onSubmit={formSubmitHandler}>
      <input
        type="text"
        placeholder="Enter Expense "
        className={classes.input}
      />
      <input
        type="number"
        placeholder="Enter Price"
        className={classes.input}
      />
      <button type="submit" className={classes.button}>
        submit
      </button>
    </form>
  );
};

export default AddExpense;