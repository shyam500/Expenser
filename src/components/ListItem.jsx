import classes from "./ListItem.module.css";
   
const ListItem = ({ id, item, price }) => {
  return (
    <li key={id} className={classes.list_item}>
      {item}
      <span className={classes.list_price}>{price} rupees</span>
      <span className={classes.delete_btn}> X </span>
    </li>
  );
};

export default ListItem;