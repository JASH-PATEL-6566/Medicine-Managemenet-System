import classes from './user.module.css';
import Navbar from "../../Components/subNavbar/navbar";
import Head from 'next/Head';
import { useAuth } from '../../firebase/Context/AuthContext';
import Widget from '../../Components/Widget/Widget';
import Feature from '../../Components/Feature/Feature';
import Chart from '../../Components/Chart/Chart';

const User = () => {
    const { currentUser } = useAuth();
    return (
        <>
            <Head>
                <title>MedAssist | DashBoard | {currentUser.email}</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Dashboard" />
                <div className={classes.widgets}>
                    <Widget type="profit" />
                    <Widget type="purchase" />
                    <Widget type="sales" />
                    {/* <Widget type="balance" /> */}
                </div>
                <div className={classes.charts}>
                    <Feature />
                    <Chart />
                </div>
            </div>
        </>
    )
}
export default User;