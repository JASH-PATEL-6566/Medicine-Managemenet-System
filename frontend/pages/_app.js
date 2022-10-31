import '../styles/globals.css'
import Home from '.';
import TopLayout from '../Components/TopLayout/TopLayout';
import login from './login';
import SignUp from './signup';
import SideLayout from '../Components/SideLayout/SideLayout';
import AuthProvider from '../firebase/Context/AuthContext';
import { ProtectRoute } from '../firebase/Context/AuthContext';

function MyApp({ Component, pageProps }) {
  switch (Component) {
    case Home: {
      return (
        <AuthProvider>
          <TopLayout>
            <Component {...pageProps} />
          </TopLayout>
        </AuthProvider>
      );
    }
    case (login):
      return (
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      );
    case (SignUp):
      return (
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      );
    default:
      return (
        <AuthProvider>
          <ProtectRoute>
            <SideLayout>
              <Component {...pageProps} />
            </SideLayout>
          </ProtectRoute>
        </AuthProvider>
      )
  }
}

export default MyApp
