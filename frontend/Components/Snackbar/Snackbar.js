import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import React from 'react'

function SnackbarTag(props) {
    return (
        <Snackbar open={props.open} autoHideDuration={3000} onClose={props.close} bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}>
            <Alert onClose={props.close} severity={props.type} sx={{ width: '100%' }
            }>
                {props.msg}
            </Alert >
        </Snackbar >
    )
}

export default SnackbarTag;