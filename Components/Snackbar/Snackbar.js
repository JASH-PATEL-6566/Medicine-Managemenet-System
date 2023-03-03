import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React from 'react'

function SnackbarTag({ msg, open, close, type }) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={close}>
            <Alert onClose={close} severity={type} sx={{ width: '100%' }}>
                {msg}
            </Alert>
        </Snackbar>
    )
}

export default SnackbarTag;