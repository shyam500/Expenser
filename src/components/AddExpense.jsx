import { useState } from "react";
import { useContext } from "react";
import { Fragment } from "react";
import classes from "./AddExpense.module.css";
import context from "./store/context";
import Notification from "./UI/Notification";
import Input from "./UI/Input";
import { motion } from "framer-motion";

const AddExpense = () => {
  const { dispatch, id, items } = useContext(context);
  const [expense, setExpense] = useState("");
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(false);

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
    if (typeof price === "string") {
      setError(true);
    }
    if (expense.length > 0 && price > 0) {
      setError(false);
      dispatch({ type: "add", payload: { id, item: expense, price } });
      localStorage.setItem("expenses", JSON.stringify(items));
      setExpense("");
      setPrice(0);
    }
  };

  return (
    <Fragment>
      {error && (
        <Notification
          func={() => setError(false)}
          message="Please Check All Input Fields"
        />
      )}

      <motion.form
        initial={{ scale: 0.2 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 80 }}
        className={classes.expense_container}
        onSubmit={formSubmitHandler}
      >
        <Input
          id="expense"
          label="Expense"
          placeholder="eg : snaks"
          value={expense}
          onchange={expenseHandler}
        />
        <Input
          id="price"
          label="Amount"
          placeholder="Enter Amount"
          value={price}
          onchange={priceHandler}
          onclick={() => setPrice("")}
        />
        <button type="submit" className={classes.button}>
          submit
        </button>
      </motion.form>
    </Fragment>
  );
};

export default AddExpense;
