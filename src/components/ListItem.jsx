import classes from "./ListItem.module.css";
import trash from '../../files/trash.png';

const ListItem = ({ item, price, dispatch }) => {

  const deleteHandler = (item) => {
    dispatch({ type: "remove", payload: item});
  };

  return (
    <li className={classes.list_item}>
      {item}
      <span className={classes.list_price}>{price} rupees</span>
      <img src={trash} className={classes.delete_btn} onClick={() => deleteHandler(item)}/>
    </li>
  );
};

export default ListItem;
