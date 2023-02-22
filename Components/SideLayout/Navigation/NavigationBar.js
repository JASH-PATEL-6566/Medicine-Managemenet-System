import React from 'react'
import classes from './nav.module.css';
import Button from '@mui/material/Button';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/router';

function NavigationBar() {
    const router = useRouter();
    return (
        <div className={classes.nav}>
            <Button color="info" onClick={() => router.replace('/user/items')}>
                <ArrowBackIosIcon /> Back
            </Button>
        </div>
    )
}

export default NavigationBar;