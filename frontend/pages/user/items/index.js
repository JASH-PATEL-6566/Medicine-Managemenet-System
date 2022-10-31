import classes from './items.module.css';
import Navbar from "../../../Components/subNavbar/navbar";

const Items = () => {
    return (
        <div className={classes.main_container}>
            <Navbar title="Items" />
        </div>
    )
}
export default Items;