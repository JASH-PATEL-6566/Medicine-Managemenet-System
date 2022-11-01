import classes from './sale.module.css';
import Navbar from "../../../Components/subNavbar/navbar";
import Head from 'next/Head';

const Items = () => {
    return (
        <>
            <Head>
                <title>MedAssist | Sale</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Sale" />
            </div>
        </>
    )
}
export default Items;