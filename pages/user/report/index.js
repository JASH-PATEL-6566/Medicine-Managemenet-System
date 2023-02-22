import classes from './report.module.css';
import Navbar from "../../../Components/subNavbar/navbar";
import Head from 'next/Head';

const Items = () => {
    return (
        <>
            <Head>
                <title>MedAssist | Report</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Report" />
            </div>
        </>
    )
}
export default Items;