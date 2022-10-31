import { useAuth } from "../../firebase/Context/AuthContext"
import { useRouter } from "next/router";
import classes from './navbar.module.css';
import { useState } from "react";
import Loading from "../Loading/Loading";

export default function Navbar({ title }) {
    const { currentUser, logout } = useAuth();
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    return (
        <>
            {!loading && <nav className={classes.nav}>
                <h2>{title}</h2>
                <ul>
                    <li>Welcome, <span>{currentUser.email}</span></li>
                    <li>
                        <button onClick={() => {
                            setLoading(true);
                            setTimeout(() => {
                                logout();
                                // router.replace("/");
                                setLoading(false);
                            }, 1000);
                        }}>Logout</button>
                    </li>
                </ul>

            </nav>}
            {loading && <Loading />}
        </>
    )
}