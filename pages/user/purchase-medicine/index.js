import Navbar from "../../../Components/subNavbar/navbar";
import classes from "./add_item.module.css";
import { Button, TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import NavigationBar from "../../../Components/SideLayout/Navigation/NavigationBar";
import { useContext, useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from "axios";
import { useRouter } from "next/router";
import { auth } from "../../../firebase/firebase";
import convertDate from "../../../utils/convertDate";
import getCurrentDate from "../../../utils/getCurrentDate";
import { StateContext } from "../../../Context/StateContext";
import AlertDialog from '../../../Components/AlertDialog/AlertDialog'
import Head from "next/head";

const AddItem = () => {

    // context
    const { state, dispatch } = useContext(StateContext)

    // state
    const [value, setValue] = useState(dayjs(convertDate(getCurrentDate())));
    const [data, setData] = useState({
        name: '',
        quantity: '',
        price: ''
    })

    // router
    const router = useRouter();

    // change state of date to user selected date
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    // update state values
    const changeHandle = (e) => {
        const element = e.target.getAttribute('id');
        setData((current) => ({ ...current, [element]: e.target.value }))
    }

    // close the alert
    const closeAlert = () => {
        dispatch({ type: 'close alert' })
        router.replace('/user/items');
    }

    // handle submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        let currentDate = getCurrentDate();

        const expiryDate = `${value.date()}/${value.month()}/${value.year()}`;
        const up = convertDate(currentDate)
        const ex = convertDate(expiryDate)

        // if medicine is not expiyred this part of code is run
        if (ex > up) {
            axios.post(process.env.DB + '/Medicine/add', { uid: auth.currentUser.uid, ...data, expiryDate, uploadOn: currentDate })
                .then((res) => {
                    // open pop up with specific message
                    dispatch({
                        type: 'open popup', playload: {
                            msg: res.data.msg,
                            type: 'success'
                        }
                    })

                    // route to items page when medicine was added
                    router.replace('/user/items')
                })
                .catch(err => {
                    dispatch({
                        type: 'open popup', playload: {
                            msg: err,
                            type: 'error'
                        }
                    })
                })
        }
        // if medicine is already expiyred this part of code is run
        else {
            dispatch({
                type: 'open alert', playload: {
                    title: "Expiry Alert...",
                    msg: "Oppps ! Medicine is already expiyred ... you are not able to add this in stock"
                }
            });
        }
    }


    if (state.isAlertOpen) {
        return <AlertDialog info={state.alertMsg} open={state.isAlertOpen} title={state.alertTitle} handleClose={closeAlert} />
    }

    return (
        <>
            <Head>
                <title>MedAssist | Purchase Medicine</title>
            </Head>
            <Navbar title="Purchase Medicine" />
            <NavigationBar dest="purchase" />
            <div className={classes.add_container}>
                <div className={classes.container}>
                    <TextField
                        className={classes.input}
                        id="name"
                        label="Item Name"
                        variant="outlined"
                        value={data.name}
                        onChange={changeHandle}
                    />
                    <TextField
                        className={classes.input}
                        id="quantity"
                        label="Quantity"
                        type="number"
                        variant="outlined"
                        value={data.quantity}
                        onChange={changeHandle}
                    />
                    <TextField
                        className={classes.input}
                        id="price"
                        type="number"
                        label="Price (per/piece)"
                        variant="outlined"
                        value={data.price}
                        onChange={changeHandle}
                    />
                    <div className={classes.cal}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DesktopDatePicker
                                label="Expiry Date"
                                inputFormat="MM/DD/YYYY"
                                value={value}
                                onChange={handleChange}
                                renderInput={(params) => <TextField className={classes.input} {...params} />}
                                views={["day", "month", "year"]}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className={classes.btn}>
                        <Button variant="contained" type="submit" onClick={handleSubmit}>
                            PURCHASE
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddItem;