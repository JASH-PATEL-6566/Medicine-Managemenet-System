import '../styles/globals.css'
import Home from '.';
import TopLayout from '../Components/TopLayout/TopLayout';
import login from './login';
import SignUp from './signup';
import SideLayout from '../Components/SideLayout/SideLayout';
import AuthProvider from '../firebase/Context/AuthContext';
import { ProtectRoute, AlreadyLogedIn } from '../firebase/Context/AuthContext';

function MyApp({ Component, pageProps }) {
  switch (Component) {
    case Home: {
      return (
        <AuthProvider>
          <AlreadyLogedIn>
            <TopLayout>
              <Component {...pageProps} />
            </TopLayout>
          </AlreadyLogedIn>
        </AuthProvider>
      );
    }
    case (login):
      return (
        <AuthProvider>
          <AlreadyLogedIn>
            <Component {...pageProps} />
          </AlreadyLogedIn>
        </AuthProvider>
      );
    case (SignUp):
      return (
        <AuthProvider>
          <AlreadyLogedIn>
            <Component {...pageProps} />
          </AlreadyLogedIn>
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
