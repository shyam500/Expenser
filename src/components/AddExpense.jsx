import { useState } from "react";
import { useContext } from "react";
import { Fragment } from "react";
import classes from "./AddExpense.module.css";
import context from "./store/context";
import Notification from "./UI/Notification";

const AddExpense = () => {
  const { items, dispatch } = useContext(context);
  const [expense, setExpense] = useState("");
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(false);
  const [id, setId] = useState(0);

  const expenseHandler = (e) => {
    setExpense(e.target.value);
  };

  const priceHandler = (e) => {
    setPrice(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (expense.length === 0 && price < 1) {
      setError(true);
    }
    if (expense.length === 0) {
      setError(true);
    }
    if (price < 1) {
      setError(true);
    }
    if (expense.length > 0 && price > 0) {
      setError(false);
      setExpense("");
      setPrice(0);
      dispatch({ type: "add", payload: { id, item: expense, price } });
      setId((prev) => prev + 1);
    }
  };

  return (
    <Fragment>
      {error && (
        <Notification
          func={() => setError(false)}
          message="Please Check Input Fields"
        />
      )}
      <form className={classes.expense_container} onSubmit={formSubmitHandler}>
          <label htmlFor="expense">Expense</label>
        <input
        id="expense"
          onChange={expenseHandler}
          type="text"
          value={expense}
          placeholder="eg : snaks"
          className={classes.input}
        />
        <label htmlFor="price">Price</label>
        <input
        id="price"
          value={price}
          onChange={priceHandler}
          onClick={()=>setPrice('')}
          type="number"
          placeholder="Enter Price"
          className={classes.input}
        />
        <button type="submit" className={classes.button}>
          submit
        </button>
      </form>
    </Fragment>
  );
};

export default AddExpense;
