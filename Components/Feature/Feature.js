import classes from './feature.module.css';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { CircularProgressbar } from 'react-circular-progressbar'
import "react-circular-progressbar/dist/styles.css"

export default function Feature() {
    return (
        <div className={classes.feature}>
            <div className={classes.top}>
                <h1 className={classes.title}>Total Revenue</h1>
                <MoreVertIcon fontSize='small' />
            </div>
            <div className={classes.bottom}>
                <div className={classes.featureChart}>
                    <CircularProgressbar value={70} text="70%" strokeWidth={7} />
                </div>
                <p className={classes.titleb}>Total sales made today</p>
                <p className={classes.amount}>₹ 420</p>
                <p className={classes.desc}>Previous transaction processing. Last payments may not be included</p>
            </div>
        </div>
    )
}