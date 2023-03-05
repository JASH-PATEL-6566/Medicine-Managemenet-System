import classes from './sale.module.css';
import Navbar from "../../../Components/subNavbar/navbar";
import Head from 'next/Head';
import { Button, TextField } from '@mui/material'

const Items = () => {
    return (
        <>
            <Head>
                <title>MedAssist | Sale</title>
            </Head>
            <div className={classes.main_container}>
                <Navbar title="Sale" />
                <div className="tabel_container">
                    <div className="sell_container">
                        <TextField className='text' variant='standard' label="Sell Item" />
                        <Button variant='contained'>Sell</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Items;