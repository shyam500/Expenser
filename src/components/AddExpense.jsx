import { useState } from "react";
import { useContext } from "react";
import classes from "./AddExpense.module.css";
import context from "./store/context";

const AddExpense = () => {
  const { items, total } = useContext(context);
  const [expense, setExpense] = useState("");
  const [price, setPrice] = useState(0);

  const expenseHandler = (e) => {
    setExpense(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if(expense.length===0&&price<1){
        
    }
  };

  return (
    <form className={classes.expense_container} onSubmit={formSubmitHandler}>
      <input
        onChange={() => {
          expenseHandler;
        }}
        type="text"
        placeholder="Enter Expense "
        className={classes.input}
      />
      <input
        onChange={() => {
          priceHandler;
        }}
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
