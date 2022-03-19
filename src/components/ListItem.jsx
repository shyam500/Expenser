import classes from "./ListItem.module.css";
import trash from "../../files/trash.png";
import { motion } from "framer-motion";

const ListItem = ({ id, item, price, dispatch }) => {
  const deleteHandler = (item) => {
    const arr = JSON.parse(localStorage.getItem("expenses"));
    if (arr.length > 0) {
      dispatch({ type: "remove", payload: item });
      const newLocalArr = arr.filter((each) => each.id !== item);
      localStorage.setItem("expenses", JSON.stringify(newLocalArr));
    }
  };

  return (
    <motion.li
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{ type: "tween", duration:0.2 }}
      className={classes.list_item}
    >
      {item}
      <span className={classes.list_price}>{price} rupees</span>
      <img
        src={trash}
        className={classes.delete_btn}
        onClick={() => deleteHandler(id)}
      />
    </motion.li>
  );
};

export default ListItem;
