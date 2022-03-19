import classes from "./Main.module.css";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import context from "./store/context";
import { useContext } from "react";

const Main = () => {
  const { items } = useContext(context);
  return (
    <section className={classes.container}>
      <h1 className={classes.heading}>Expenser</h1>
      <AddExpense />
      {items.length > 0 ? <ExpenseList /> : <h1 className={classes.notfound}>No items Found</h1>}
    </section>
  ); 
};

export default Main;
