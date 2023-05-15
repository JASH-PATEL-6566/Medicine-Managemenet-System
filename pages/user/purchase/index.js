import classes from './purchase.module.css';
import Navbar from "../../../Components/subNavbar/navbar";
import Head from 'next/head';
import DataTable from '../../../Components/DataTabel/DataTabel';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { auth } from '../../../firebase/firebase';
import { StateContext } from '../../../Context/StateContext';
import SnackbarTag from '../../../Components/Snackbar/Snackbar';
import { columns } from "../../../Components/DataTabel/Purchase/Column";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Sales = () => {
    const router = useRouter();
    const [medicineData, setMedicineData] = useState([]);
    const { state, dispatch } = useContext(StateContext);

    useEffect(() => {
        axios.post('/api/Medicine/fetch', { uid: auth.currentUser.uid })
            .then((res) => {
                setMedicineData(res.data.history.filter((medicine) => medicine.type === "add"))
            })
    }, [])


    return (
        <>
            <Head>
                <title>MedAssist | Purchase</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Purchase" />
                <div className={classes.dataTabelContainer}>
                    <div className={classes.input_container}>
                        <div className={classes.btn}>
                            <Button startIcon={<ShoppingCartIcon />} fullWidth={true} variant="contained" color="primary" onClick={() => router.replace('/user/purchase-medicine')}>
                                Purchase
                            </Button>
                        </div>
                    </div>
                    <DataTable data={medicineData} col={columns} />
                </div>
            </div>
            <SnackbarTag
                open={state.isPopUpOpen}
                msg={state.popupMsg}
                type={state.popupType}
                close={(reason) => {
                    if (reason === 'clickaway') {
                        return;
                    }
                    dispatch({ type: 'close popup' })
                }} />
        </>
    )
}
export default Sales;