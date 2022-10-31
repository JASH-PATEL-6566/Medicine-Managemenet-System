import classes from './user.module.css';
import Navbar from "../../Components/subNavbar/navbar";

const User = () => {
    return (
        <div className={classes.main_container}>
            <Navbar title="Dashboard" />
        </div>
    )
}
export default User;