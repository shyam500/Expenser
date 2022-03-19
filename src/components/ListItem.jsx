import classes from "./ListItem.module.css";
import trash from "../../files/trash.png";

const ListItem = ({ id, item, price, dispatch }) => {
  const deleteHandler = (item) => {
    dispatch({ type: "remove", payload: item });
    const arr = JSON.parse(localStorage.getItem("expenses"));
    const newLocalArr = arr.filter((each) => each.item !== item);
    localStorage.setItem("expenses", JSON.stringify(newLocalArr));
  };

  return (
    <li className={classes.list_item}>
      {item}
      <span className={classes.list_price}>{price} rupees</span>
      <img
        src={trash}
        className={classes.delete_btn}
        onClick={() => deleteHandler(id)}
      />
    </li>
  );
};

export default ListItem;