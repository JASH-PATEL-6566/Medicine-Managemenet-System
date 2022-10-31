import { useRouter } from "next/router";
import { useAuth } from "../../firebase/Context/AuthContext"

const User = () => {
    const { logout } = useAuth();
    const router = useRouter();
    return (
        <>
            {/* <h1>{id}</h1> */}
            <button onClick={() => {
                router.replace("/");
                logout();
            }}>Logout</button>
        </>
    )
}
export default User;