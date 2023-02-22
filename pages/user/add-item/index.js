import Navbar from "../../../Components/subNavbar/navbar";
import classes from "./add_item.module.css";
import { Button, TextField } from '@mui/material'
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import NavigationBar from "../../../Components/SideLayout/Navigation/NavigationBar";
import { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from "axios";
import SnackbarTag from '../../../Components/Snackbar/Snackbar'
import { useRouter } from "next/router";

const AddItem = () => {
    const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
    const [data, setData] = useState({
        name: '',
        quantity: '',
        price: ''
    })
    const [open, setOpen] = useState(false);
    const [msg, setMsg] = useState({
        type: '',
        info: ''
    });
    const router = useRouter();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const changeHandle = (e) => {
        const element = e.target.getAttribute('id');
        setData((current) => ({ ...current, [element]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(process.env.DB + '/Medicine/add', { ...data, expiryDate: value })
            .then((res) => {
                setOpen(true);
                setMsg({ type: 'success', info: res.data.msg })
                router.replace('/user/items')
            })
            .catch(err => {
                setOpen(true);
                setMsg({ type: 'error', info: err })
            })
    }

    return (
        <>
            <Navbar title="Add Item" />
            <NavigationBar />
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
                            />
                        </LocalizationProvider>
                    </div>
                    <div className={classes.btn}>
                        <Button variant="contained" type="submit" onClick={handleSubmit}>
                            ADD
                        </Button>
                        <SnackbarTag
                            open={open}
                            close={handleClose}
                            msg={msg.info}
                            type={msg.type}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddItem;