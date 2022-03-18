import classes from "./TotalItem.module.css";

const TotalItem = ({ total }) => {
  return (
    <li className={classes.total_container}>
      Total <span className={classes.total}>{total}</span>
    </li>
  );
};

export default TotalItem;