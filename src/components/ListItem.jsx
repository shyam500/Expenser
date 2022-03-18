import classes from "./ListItem.module.css";
import context from "./store/context";
import { useContext } from "react";

const ListItem = ({ item, price, dispatch }) => {

  const deleteHandler = (item) => {
    dispatch({ type: "remove", payload: item});
  };

  return (
    <li className={classes.list_item}>
      {item}
      <span className={classes.list_price}>{price} rupees</span>
      <span className={classes.delete_btn} onClick={() => deleteHandler(item)}>
        X
      </span>
    </li>
  );
};

export default ListItem;
