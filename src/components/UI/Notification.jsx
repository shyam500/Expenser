import classes from "./Notification.module.css";

const Notification = ({ message, func }) => {
  const buttonHandler = () => {
    func();
  };

  return (
    <section
      className={classes.container}
    >
      <h2>{message}</h2>
      <button onClick={buttonHandler}>OK</button>
    </section>
  );
};

export default Notification;
