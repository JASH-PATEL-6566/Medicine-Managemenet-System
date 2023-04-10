import classes from './sale.module.css';
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
import { columns_sale } from '../../../Components/DataTabel/Sales/Column';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const Sales = () => {
    const router = useRouter();
    const [medicineData, setMedicineData] = useState([]);
    const { state, dispatch } = useContext(StateContext);

    useEffect(() => {
        axios.post('/api/Medicine/fetch', { uid: auth.currentUser.uid })
            .then((res) => {
                setMedicineData(res.data.sales)
            })
    }, [])

    // console.log(state);

    return (
        <>
            <Head>
                <title>MedAssist | Sales</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Sales" />
                <div className={classes.dataTabelContainer}>
                    <div className={classes.input_container}>
                        <div className={classes.btn}>
                            <Button startIcon={<RemoveCircleIcon />} fullWidth={true} variant="contained" color="error" onClick={() => router.replace('/user/sale-medicine')}>
                                Sale
                            </Button>
                        </div>
                    </div>
                    <DataTable data={medicineData} col={columns_sale} />
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