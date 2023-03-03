import '../styles/globals.css'
import Home from '.';
import TopLayout from '../Components/TopLayout/TopLayout';
import login from './login';
import SignUp from './signup';
import SideLayout from '../Components/SideLayout/SideLayout';
import AuthProvider from '../firebase/Context/AuthContext';
import ProtectedRoute from '../Components/ProtectedRoute/ProtectedRoute';
import AlreadyLogin from '../Components/AlreadyLogin/AlreadyLogin';
import { StateContextProvider } from '../Context/StateContext';


function MyApp({ Component, pageProps }) {
  switch (Component) {
    case Home: {
      return (
        <AuthProvider>
          <StateContextProvider>
            <AlreadyLogin>
              <TopLayout>
                <Component {...pageProps} />
              </TopLayout>
            </AlreadyLogin>
          </StateContextProvider>
        </AuthProvider>
      );
    }
    case (login):
      return (
        <AuthProvider>
          <StateContextProvider>
            <AlreadyLogin>
              <Component {...pageProps} />
            </AlreadyLogin>
          </StateContextProvider>
        </AuthProvider>
      );
    case (SignUp):
      return (
        <AuthProvider>
          <StateContextProvider>
            <AlreadyLogin>
              <Component {...pageProps} />
            </AlreadyLogin>
          </StateContextProvider>
        </AuthProvider>
      );
    default:
      return (
        <AuthProvider>
          <StateContextProvider>
            <ProtectedRoute>
              <SideLayout>
                <Component {...pageProps} />
              </SideLayout>
            </ProtectedRoute>
          </StateContextProvider>
        </AuthProvider>
      )
  }
}

export default MyApp
