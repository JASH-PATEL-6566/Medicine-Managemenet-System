import '../styles/globals.css'
import Home from '.';
import TopLayout from '../Components/TopLayout/TopLayout';
import login from './login';
import SignUp from './signup';
import SideLayout from '../Components/SideLayout/SideLayout';
import AuthProvider from '../firebase/Context/AuthContext';
import ProtectedRoute from '../Components/ProtectedRoute/ProtectedRoute';
import AlreadyLogin from '../Components/AlreadyLogin/AlreadyLogin';

function MyApp({ Component, pageProps }) {
  switch (Component) {
    case Home: {
      return (
        <AuthProvider>
          <AlreadyLogin>
            <TopLayout>
              <Component {...pageProps} />
            </TopLayout>
          </AlreadyLogin>
        </AuthProvider>
      );
    }
    case (login):
      return (
        <AuthProvider>
          <AlreadyLogin>
            <Component {...pageProps} />
          </AlreadyLogin>
        </AuthProvider>
      );
    case (SignUp):
      return (
        <AuthProvider>
          <AlreadyLogin>
            <Component {...pageProps} />
          </AlreadyLogin>
        </AuthProvider>
      );
    default:
      return (
        <AuthProvider>
          <ProtectedRoute>
            <SideLayout>
              <Component {...pageProps} />
            </SideLayout>
          </ProtectedRoute>
        </AuthProvider>
      )
  }
}

export default MyApp
