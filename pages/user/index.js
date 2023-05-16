import classes from './user.module.css';
import Navbar from "../../Components/subNavbar/navbar";
import Head from 'next/head';
import { useAuth } from '../../firebase/Context/AuthContext';
import Widget from '../../Components/Widget/Widget';
import Feature from '../../Components/Feature/Feature';
import Chart from '../../Components/Chart/Chart';
import { StateContext } from "../../Context/StateContext";
import { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material/';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useRouter } from 'next/router';


export default function User() {
    const router = useRouter();
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
                    {/* <Widget type="profit" /> */}
                    <Widget type="purchase" />
                    <Widget type="sales" />
                    <div className={classes.btn_container}>
                        {/* purchase */}
                        <IconButton btn_type="purchase" title="purchase medicine" onClick={async () => {
                            await router.push('/user/purchase-medicine')
                        }}>
                            <ShoppingCartIcon />
                        </IconButton>

                        {/* sale */}
                        <IconButton title="sale medicine" btn_type="sale" className={classes.sale} onClick={async () => {
                            await router.push('/user/sale-medicine')
                        }}>
                            <StorefrontIcon />
                        </IconButton>

                        {/* remove medicine */}
                        <IconButton title="remove medicine" btn_type="remove" onClick={async () => {
                            await router.push('/user/remove-medicine')
                        }}>
                            <RemoveCircleIcon />
                        </IconButton>
                    </div>
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