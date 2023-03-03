import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'name', headerName: 'Name', width: 190 },
    {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 160,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 160,
    },
    {
        field: 'expiryDate',
        headerName: 'ExpiryDate',
        width: 190
    },
    {
        field: 'uploadOn',
        headerName: 'Upload-On',
        width: 160
    }
];


export default function DataTable({ data }) {
    const rows = data;

    console.log(rows);
    return (
        <div style={{ height: 475, width: '100%' }}>
            <DataGrid
                getRowId={(row) => row._id}
                rows={rows}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[7]}
            />
        </div>
    );
}