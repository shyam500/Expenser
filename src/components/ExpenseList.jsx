import { useContext } from "react";
import context from "./store/context";
import classes from "./ExpenseList.module.css";
import ListItem from "./ListItem";
import TotalItem from "./TotalItem";
import { Fragment } from "react";
import { motion } from "framer-motion";

const ExpenseList = () => {
  const { items, total, dispatch } = useContext(context);
  return (
    <Fragment>
      <motion.ul
        initial={{ scale: 0.2 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={classes.container}
      >
        {items.map((each) => (
          <ListItem
            key={each.id}
            id={each.id}
            item={each.item}
            price={each.price}
            dispatch={dispatch}
          />
        ))}
      </motion.ul>
      <TotalItem total={total} />
    </Fragment>
  );
};

export default ExpenseList;