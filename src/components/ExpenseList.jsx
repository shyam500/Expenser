import { useContext } from "react";
import context from "./store/context";
import classes from "./ExpenseList.module.css";
import ListItem from "./ListItem";
import TotalItem from "./TotalItem";
import { Fragment } from "react";

const ExpenseList = () => {
  const { items, total, dispatch } = useContext(context);
  return ( 
    <Fragment>
    <ul className={classes.container}>
      {items.map((each) => (
        <ListItem
          key={each.id}
          id={each.id}
          item={each.item}
          price={each.price}
          dispatch={dispatch}
        />
      ))}
    </ul>
      <TotalItem total={total} />
    </Fragment>
  );
};


export default ExpenseList;