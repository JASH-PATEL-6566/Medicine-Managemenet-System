import Navbar from "../../../Components/subNavbar/navbar";
import classes from "./remove.module.css";
import { Button, TextField } from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import NavigationBar from "../../../Components/SideLayout/Navigation/NavigationBar";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { auth } from "../../../firebase/firebase";
import { StateContext } from "../../../Context/StateContext";
import AlertDialog from '../../../Components/AlertDialog/AlertDialog'
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Head from "next/head";

const AddItem = () => {

    // context
    const { state, dispatch } = useContext(StateContext)

    // state
    const [medicineData, setMedicineData] = useState([])
    const [value, setValue] = useState(null);
    const [inputValue, setInputValue] = useState("");
    const [checked, setChecked] = useState(true)
    const [quantity, setQuantity] = useState("");

    // router
    const router = useRouter();

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    // close the alert
    const closeAlert = () => {
        dispatch({ type: 'close alert' })
        setValue(null);
        setInputValue("")
        setQuantity("");
    }


    // useeffect 
    useEffect(() => {
        axios.post('/api/Medicine/fetch', { uid: auth.currentUser.uid })
            .then((res) => {
                console.log(res);
                setMedicineData(res.data.stock)
            })
    }, [])

    // handle submit 
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!checked && quantity > value.quantity) {
            dispatch({
                type: 'open alert', playload: {
                    title: "Invalid Input.....",
                    msg: "Entered Quantity is greater than available Quantity......"
                }
            });
            return;
        }

        if (!checked && quantity === "") {
            dispatch({
                type: 'open alert', playload: {
                    title: "Invalid Input.....",
                    msg: "Kindly! please Enter quantity first and then submit."
                }
            });
            return;
        }



        axios.post(process.env.DB + `/Medicine/${checked ? 'whole_remove' : 'partial_remove'}`, (checked ? { uid: auth.currentUser.uid, ...value, type: "remove" } : { uid: auth.currentUser.uid, ...value, remove_quantity: quantity, type: "remove" }))
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


    if (state.isAlertOpen) {
        return <AlertDialog info={state.alertMsg} open={state.isAlertOpen} title={state.alertTitle} handleClose={closeAlert} />
    }
    // console.log(medicineData.stock);
    // console.log(value);

    return (
        <>
            <Head>
                <title>MedAssist | Remove Medicine</title>
            </Head>
            <Navbar title="Remove Medicine" />
            <NavigationBar dest="items" />
            <div className={classes.add_container}>
                <div className={classes.container}>
                    <Autocomplete
                        value={value}
                        onChange={(event, newValue) => {
                            // console.log(newValue);
                            setValue(newValue);
                        }}
                        inputValue={inputValue}
                        onInputChange={(_, newInputValue) => {
                            setInputValue(newInputValue)
                        }}
                        isOptionEqualToValue={(option, value) => option._id === value._id}
                        id="controllable-states-demo"
                        options={medicineData}
                        getOptionLabel={(medicineData) => medicineData.name}
                        sx={{ width: 300 }}
                        renderOption={(props, option) => {
                            return (
                                <li {...props} key={option._id}>
                                    {option.name}
                                </li>
                            )
                        }}
                        renderInput={(params) => <TextField required {...params} label="Search For Medicine" />}
                    />
                    <TextField
                        required
                        className={classes.input}
                        style={{ display: `${checked ? 'none' : 'block'}` }}
                        id="quantity"
                        label="Quantity"
                        type="number"
                        variant="outlined"
                        value={quantity}
                        onChange={(event) => setQuantity(event.target.value)}
                    />
                    <FormControlLabel
                        className={classes.checkbox}
                        control={<Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />}
                        label="You want to remove whole stock of this medicine?"
                    />
                    <div className={classes.btn}>
                        <Button color='error' variant="contained" type="submit" onClick={handleSubmit}>
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddItem;