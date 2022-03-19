import classes from "./Main.module.css";
import AddExpense from "./AddExpense";
import ExpenseList from "./ExpenseList";
import context from "./store/context";
import { useContext } from "react";
import { motion } from "framer-motion";

const Main = () => {
  const { items } = useContext(context);
  return (
    <motion.section
      className={classes.container}
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100, when: "beforeChildren" }}
    >
      <h1 className={classes.heading}>Expenser</h1>
      <AddExpense />
      {items.length > 0 ? (
        <ExpenseList />
      ) : (
        <h1 className={classes.notfound}>No items Found</h1>
      )}
    </motion.section>
  );
};

export default Main;
