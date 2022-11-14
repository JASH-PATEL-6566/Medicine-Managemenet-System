import classes from './items.module.css';
import Navbar from "../../../Components/subNavbar/navbar";
import Head from 'next/Head';
import DataTable from '../../../Components/DataTabel/DataTabel';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Items = () => {
    return (
        <>
            <Head>
                <title>MedAssist | Items</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Items" />
                <div className={classes.dataTabelContainer}>
                    <div className={classes.input_container}>
                        <TextField
                            className={classes.input}
                            id="standard-basic"
                            label="Standard"
                            variant="standard"
                        />
                        <IconButton>
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <DataTable />
                </div>
            </div>
        </>
    )
}
export default Items;