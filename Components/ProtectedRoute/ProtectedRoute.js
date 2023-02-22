import { useRouter } from 'next/router';
import { useAuth } from '../../firebase/Context/AuthContext';
import Loading from '../Loading/Loading';

function ProtectedRoute({ children }) {
    const { currentUser } = useAuth();
    const router = useRouter();
    if (!currentUser) {
        router.replace('/login');
        return <Loading />
    }

    return (
        children
    )
}

export default ProtectedRoute;