import { useContext } from "react";
import context from "./store/context";
import classes from "./ExpenseList.module.css";
import ListItem from "./ListItem";

const ExpenseList = () => {
  const { items,total } = useContext(context);
  console.log(total);
  return (
    <ul className={classes.container}>
      {items.map((each) => (
        <ListItem  key={each.id} item={each.item} price={each.price} />
      ))}
      <hr />
    </ul>
  );
};

export default ExpenseList;