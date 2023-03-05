import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


export default function DataTable({ data, col }) {
    const rows = data;

    console.log(rows);
    return (
        <div style={{ height: 475, width: '100%' }}>
            <DataGrid
                getRowId={(row) => row._id}
                rows={rows}
                columns={col}
                // pageSize={7}
                rowsPerPageOptions={[7]}
            />
        </div>
    );
}