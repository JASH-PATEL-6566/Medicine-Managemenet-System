import classes from './vnavbar.module.css';
import { FaBell, FaShapes, FaCartPlus, FaFileInvoice, FaChartPie } from 'react-icons/fa';
import { MdDashboardCustomize } from 'react-icons/md'
import $ from 'jquery';
import logo from '../../../Images/MedAssist.png';
import Image from 'next/image';
import Link from 'next/Link';

export default function Navbar() {

    $(document).ready(function () {
        $("nav ul li").click(function () {
            $(this).addClass(`${classes.active}`).siblings().removeClass(`${classes.active}`);
        })
        $("nav ul ul li").click(function () {
            $(this).removeClass(`${classes.active}`).siblings().removeClass(`${classes.active}`);
        })
    })

    return (
        <main className={classes.main}>
            <nav className={classes.sidebar}>
                <div className={classes.text}>
                    <Image
                        src={logo}
                        width={150}
                        alt="logo"
                        priority="performance"
                    />
                </div>
                <ul>
                    <li><Link href='/user'><MdDashboardCustomize style={{ marginRight: "1em" }} /> Dashboard</Link></li>
                    <li><Link href='/user/items'><FaShapes style={{ marginRight: "1em" }} />Items</Link></li>
                    <li><Link href='/user/sale'><FaFileInvoice style={{ marginRight: "1em" }} />Sale</Link></li>
                    <li><Link href='/user/purchase'><FaCartPlus style={{ marginRight: "1em" }} />Purchase</Link></li>
                    <li className={classes.noti}>
                        <Link href='/user/notification'><FaBell style={{ marginRight: "1em" }} />Notification</Link>
                        <span className={classes.count}>
                            1
                        </span>
                    </li>
                    <li><Link href='/user/report'><FaChartPie style={{ marginRight: "1em" }} />Report</Link></li>
                </ul>
            </nav >
        </main>
    )
}