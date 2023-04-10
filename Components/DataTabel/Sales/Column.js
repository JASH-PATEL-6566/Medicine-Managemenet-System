export const columns_sale = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'name', headerName: 'Name', width: 190 },
    {
        field: 'quantity',
        headerName: 'Sales Quantity',
        type: 'number',
        width: 160,
    },
    {
        field: 'remaining_quantity',
        headerName: 'Rmaining Qunatity',
        type: 'number',
        width: 160,
    },
    {
        field: 'sales_ammount',
        headerName: 'Sales Amount',
        type: 'number',
        width: 160,
    },
    {
        field: 'date',
        headerName: 'Date',
        type: 'string',
        width: 180,
    },
];