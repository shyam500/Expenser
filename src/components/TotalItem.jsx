import classes from "./TotalItem.module.css";

const TotalItem = ({ total }) => {
  return (
    <li className={classes.total_container}>
      Total Amount <span className={classes.total}>{total} rupees</span>
    </li>
  );
};
 
export default TotalItem;