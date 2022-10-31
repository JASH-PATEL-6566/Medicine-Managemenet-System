import classes from './hnavbar.module.css';
import Link from 'next/link';

export default function HNavbar() {
    return (
        <header className={classes.navbar}>
            <nav>
                <div className={classes.hnavbar_name}>
                    <h1><Link href="/"><span>Med</span>Assist.io</Link></h1>
                </div>
                <ul className={classes.links}>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/signup">SignUp</Link></li>
                </ul>
            </nav>
        </header>
    )
}