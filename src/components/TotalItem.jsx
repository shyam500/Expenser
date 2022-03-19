import classes from "./TotalItem.module.css";
import { motion } from "framer-motion";

const TotalItem = ({ total }) => {
  return (
    <motion.li
      initial={{ scale: 0.2 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={classes.total_container}
    >
      Total Expense is <span className={classes.total}>{total} rupees</span>
    </motion.li>
  );
};


export default TotalItem;