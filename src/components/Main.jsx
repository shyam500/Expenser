import classes from './Main.module.css';
import AddExpense from './AddExpense';

const Main=()=>{
    return(
        <section className={classes.container}>
            <h1 className={classes.heading} >Expenser</h1>
            <AddExpense/>
        </section>
    )
};

export default Main;