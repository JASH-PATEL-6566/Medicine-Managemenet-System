import classes from './items.module.css';
import Navbar from "../../../Components/subNavbar/navbar";
import Head from 'next/Head';
import DataTable from '../../../Components/DataTabel/DataTabel';
import Button from '@mui/material/Button';
import axios from 'axios'
import { useRouter } from 'next/router';

const Items = () => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>MedAssist | Items</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Items" />
                <div className={classes.dataTabelContainer}>
                    <div className={classes.input_container}>
                        <Button variant="contained" onClick={() => router.replace('/user/add-item')}>
                            Add
                        </Button>
                    </div>
                    <DataTable />
                </div>
            </div>
        </>
    )
}
export default Items;