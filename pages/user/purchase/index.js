import classes from './purchase.module.css';
import Navbar from "../../../Components/subNavbar/navbar";
import Head from 'next/head';

const Items = () => {
    return (
        <>
            <Head>
                <title>MedAssist | Purchase</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Purchase" />
            </div>
        </>
    )
}
export default Items;