import { useContext } from "react";
import context from "./store/context";
import classes from "./ExpenseList.module.css";
import ListItem from "./ListItem";
import TotalItem from "./TotalItem";

const ExpenseList = () => {
  const { items, total, dispatch } = useContext(context);
  return (
    <ul className={classes.container}>
      {items.map((each) => (
        <ListItem
          key={each.id}
          item={each.item}
          price={each.price}
          dispatch={dispatch}
        />
      ))}
      <hr />
      <TotalItem total={total} />
    </ul>
  );
};


export default ExpenseList;