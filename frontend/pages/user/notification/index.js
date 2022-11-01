import classes from './notification.module.css';
import Navbar from "../../../Components/subNavbar/navbar";
import Head from 'next/Head';

const Items = () => {
    return (
        <>
            <Head>
                <title>MedAssist | Notification</title>
            </Head >
            <div className={classes.main_container}>
                <Navbar title="Notification" />
            </div>
        </>
    )
}
export default Items;