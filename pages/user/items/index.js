import classes from './items.module.css';
import Navbar from "../../../Components/subNavbar/navbar";
import Head from 'next/Head';
import DataTable from '../../../Components/DataTabel/DataTabel';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { auth } from '../../../firebase/firebase';

import { StateContext } from '../../../Context/StateContext';
import SnackbarTag from '../../../Components/Snackbar/Snackbar';

const Items = () => {
    const router = useRouter();
    const [medicineData, setMedicineData] = useState([]);
    const { state, dispatch } = useContext(StateContext);
    // console.log(medicineData);

    useEffect(() => {
        axios.post('/api/Medicine/fetch', { uid: auth.currentUser.uid })
            .then((res) => {
                setMedicineData(res.data)
            })
    }, [])

    console.log(state);

    return (
        <>
            <Head>
                <title>MedAssist | Items</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Items" />
                <div className={classes.dataTabelContainer}>
                    <div className={classes.input_container}>
                        <Button variant="contained" onClick={() => router.replace('/user/add-medicine')}>
                            Add
                        </Button>
                    </div>
                    <DataTable data={medicineData} />
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
export default Items;