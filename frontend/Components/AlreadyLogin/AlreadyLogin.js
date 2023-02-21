import { useRouter } from "next/router";
import { useAuth } from "../../firebase/Context/AuthContext"
import Loading from "../Loading/Loading";

function AlreadyLogin({ children }) {
    const { currentUser } = useAuth();
    const router = useRouter();

    if (currentUser) {
        router.replace('/user');
        return <Loading />
    }

    return (
        children
    )
}

export default AlreadyLogin