import classes from './user.module.css';
import Navbar from "../../Components/subNavbar/navbar";
import Head from 'next/Head';
import { useAuth } from '../../firebase/Context/AuthContext';

const User = () => {
    const { currentUser } = useAuth();
    return (
        <>
            <Head>
                <title>MedAssist | DashBoard | {currentUser.email}</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Dashboard" />
            </div>
        </>
    )
}
export default User;