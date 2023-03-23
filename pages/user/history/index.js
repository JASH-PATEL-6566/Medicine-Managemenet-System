import classes from './history.module.css';
import React, { useEffect, useState } from 'react'
// import Head from 'next/head'
import Navbar from '../../../Components/subNavbar/navbar';
import DataTable from '../../../Components/DataTabel/DataTabel';
import { columns } from '../../../Components/DataTabel/History/Column'
import axios from 'axios';
import { auth } from '../../../firebase/firebase';
import HistoryTable from '../../../Components/HistoryTable/HistoryTable';


function History() {
    const [data, setData] = useState([]);
    // console.log(columns);

    useEffect(() => {
        axios.post('/api/Medicine/fetch', { uid: auth.currentUser.uid })
            .then((res) => {
                const { history } = res.data;
                setData(history);
            })
    }, [])

    return (
        <>
            {/* <Head>
                <title>MedAssist | History</title>
            </Head> */}
            <Navbar title="History" />
            <div className={classes.main_container}>
                {/* <DataTable data={data} col={columns} class="mui_history_table" /> */}
                <HistoryTable rows={data} />
            </div>
        </>
    )
}

export default History;