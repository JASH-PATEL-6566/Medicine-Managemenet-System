import { useAuth } from "../../firebase/Context/AuthContext"
import { useRouter } from "next/router";
import classes from './navbar.module.css';
import { useState } from "react";
import Loading from "../Loading/Loading";
import LogoutIcon from '@mui/icons-material/Logout';
import HistoryIcon from '@mui/icons-material/History';
import { IconButton } from '@mui/material/';
import { auth } from "../../firebase/firebase";

export default function Navbar({ title }) {
    const { currentUser, logout } = useAuth();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    return (
        <>
            {!loading && <nav className={classes.nav}>
                <h2>{title}</h2>
                <ul>
                    <li>Welcome, <span>{auth.currentUser && auth.currentUser.displayName}</span></li>
                    <li>
                        <IconButton>
                            <HistoryIcon />
                        </IconButton>
                    </li>
                    <li>
                        {/* <button onClick={() => {
                            setLoading(true);
                            setTimeout(() => {
                                logout();
                                // router.replace("/");
                                setLoading(false);
                            }, 1000);
                        }}>
                            <LogoutIcon />
                        </button> */}
                        <IconButton onClick={async () => {
                            setLoading(true);
                            // setTimeout(() => {
                            logout();
                            await router.push('/login')
                            setLoading(false);
                            // }, 1000);
                        }
                        }><LogoutIcon /></IconButton>
                    </li>
                </ul>


            </nav>}
            {loading && <Loading />}
        </>
    )
}