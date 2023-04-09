import classes from './loading.module.css';
import Head from 'next/head';

export default function Loading() {
    return (
        <>
            <Head>
                <title>Loading....</title>
            </Head>
            <div className={classes.center}>
                <div className={classes.wave}></div>
                <div className={classes.wave}></div>
                <div className={classes.wave}></div>
                <div className={classes.wave}></div>
                <div className={classes.wave}></div>
                <div className={classes.wave}></div>
                <div className={classes.wave}></div>
                <div className={classes.wave}></div>
                <div className={classes.wave}></div>
                <div className={classes.wave}></div>
            </div>
        </>
    )
}