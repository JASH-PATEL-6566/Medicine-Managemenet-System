import classes from './notification.module.css';
import Navbar from "../../../Components/subNavbar/navbar";
import Head from 'next/Head';
import DataTable from '../../../Components/DataTabel/DataTabel';

const Items = () => {
    return (
        <>
            <Head>
                <title>MedAssist | Notification</title>
            </Head >
            <div className={classes.main_container}>
                <Navbar title="Notification" />
                <div className={classes.notification_tabel}>
                    <DataTable />
                </div>
            </div>
        </>
    )
}
export default Items;