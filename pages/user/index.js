import classes from './user.module.css';
import Navbar from "../../Components/subNavbar/navbar";
import Head from 'next/head';
import { useAuth } from '../../firebase/Context/AuthContext';
import Widget from '../../Components/Widget/Widget';
import Feature from '../../Components/Feature/Feature';
import Chart from '../../Components/Chart/Chart';
import { StateContext } from "../../Context/StateContext";
import { useContext } from 'react';


export default function User() {
    const { currentUser } = useAuth();
    const { state } = useContext(StateContext)
    return (
        <>
            <Head>
                {currentUser && <title>MedAssist | DashBoard | {currentUser.displayName}</title>}
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Dashboard" badger={state.badger_history} />
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