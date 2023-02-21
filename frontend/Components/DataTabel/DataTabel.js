import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'Name', headerName: 'Name', width: 150 },
    {
        field: 'Price',
        headerName: 'Price',
        type: 'number',
        width: 150,
    },
    {
        field: 'Quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 150,
    },
    {
        field: 'ExpiryDate',
        headerName: 'ExpiryDate',
        width: 150
    },
    {
        field: 'LastUpdateOn',
        headerName: 'Last Update On',
        width: 150
    }
];

const rows = [
    { id: 193, Name: 'Peracile moll', Price: 100, Quantity: 10, Expiry: "15/10/2022" },
    // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    // { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    // { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    // { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    // { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    // { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
    return (
        <div style={{ height: 475, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={7}
                rowsPerPageOptions={[7]}
            />
        </div>
    );
}