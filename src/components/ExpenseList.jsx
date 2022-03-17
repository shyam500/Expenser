import { useContext } from "react";
import context from "./store/context";
import classes from "./ExpenseList.module.css";
import ListItem from "./ListItem";

const ExpenseList = () => {
  const { items } = useContext(context);
  return (
    <ul className={classes.container}>
      {items.map((each) => (
        <ListItem id={id} item={items} price={price}/>
      ))}
    </ul>
  );
};

export default ExpenseList;