import image from '../../Images/login.jpg'
import Image from 'next/image';
import classes from './login.module.css';
import { useRef, useState } from 'react';
import { useAuth } from '../../firebase/Context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Head from 'next/Head'
import Loading from '../../Components/Loading/Loading';

export default function login() {
    const emailRef = useRef();
    const passRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const router = useRouter();


    const handleSubmit = (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);
        login(emailRef.current.value, passRef.current.value)
            .then((res) => {
                // console.log(res);
                if (res.user) {
                    // setTimeout(() => {
                    router.replace('/user')
                    // }, 1000);
                }
                setLoading(false);
            })
            .catch((err) => {
                // console.log(err);
                switch (err.code) {
                    case 'auth/wrong-password':
                        setError('Wrong Password.....Please try again')
                        break;
                    default:
                        setError('something went Wrong....Please try again')
                        break;
                }
                setLoading(false);
            })
    }

    return (
        <>
            <Head>
                <title>Login | MedAssist</title>
            </Head>
            {!loading && <div className={classes.main_container}>
                <div className={classes.img_container}>
                    <Image
                        src={image}
                        height={700}
                        width={700}
                        alt="Login Image"
                        priority="performance"
                    />
                </div>
                <div className={classes.outer_conatiner}>
                    <form onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <div className={classes.email_con}>
                            <label htmlFor="email">Your Email : </label>
                            <input type="email" ref={emailRef} required id='email' placeholder='Enter your email' />
                        </div>
                        <div className={classes.pass_con}>
                            <label htmlFor="pass">Your Password : </label>
                            <input type="password" ref={passRef} required id='pass' placeholder='Enter your Password' />
                        </div>
                        <label className={error === "" ? "hidden" : ""}>* {error}</label>
                        <button type='submit' disabled={loading} className={loading ? classes.disable : ""}>{loading ? "Loading..." : "Login"}</button>
                        <span>OR</span>
                        <Link href="/signup" className={classes.reg}>SignUp</Link>
                    </form>
                </div>
            </div >}
            {loading && <Loading />}
        </>
    )
}
