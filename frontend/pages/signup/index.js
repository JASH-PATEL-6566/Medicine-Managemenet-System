import image from '../../Images/login.jpg'
import Image from 'next/image';
import classes from '../login/login.module.css';
import { useRef, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '../../firebase/Context/AuthContext';
import { useRouter } from 'next/router'
import Head from 'next/Head';

export default function SignUp() {
    const emailRef = useRef();
    const passRef = useRef();
    const conPassRef = useRef();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (passRef.current.value !== conPassRef.current.value) {
            return setError('Password do not match')
        }
        setError('')
        setLoading(true)
        signup(emailRef.current.value, passRef.current.value)
            .then(() => {
                router.push('/login')
            })
            .catch(err => {
                switch (err.code) {
                    case 'auth/email-already-in-use':
                        setError('Email already in use !')
                        break;
                    case 'auth/weak-password':
                        setError('Length of password must be more than 6')
                        break;
                    default:
                        setError('Something went wrong.... Please try again')
                }
                emailRef.current.value = '';
            })
        setLoading(false)
    }

    return (
        <>
            <Head>
                <title>SignUp | MedAssist</title>
            </Head>
            <div className={classes.main_container}>
                <div className={classes.img_container}>
                    <Image
                        src={image}
                        height={700}
                        width={700}
                        alt="Login Image"
                    />
                </div>
                <div className={classes.outer_conatiner}>
                    <form onSubmit={handleSubmit}>
                        <h1>SignUp</h1>
                        <div className={classes.email_con}>
                            <label htmlFor="email">Your Email : </label>
                            <input type="email" ref={emailRef} required id='email' placeholder='Enter your email' />
                        </div>
                        <div className={classes.pass_con}>
                            <label htmlFor="pass">Your Password : </label>
                            <input type="password" ref={passRef} required id='pass' placeholder='Enter your Password' />
                        </div>
                        <div className={classes.pass_con}>
                            <label htmlFor="pass">Confirm Password : </label>
                            <input type="password" ref={conPassRef} required id='pass' placeholder='Enter your Password' />
                        </div>
                        <label className={error === "" ? "hidden" : ""}>* {error}</label>
                        <button type='submit' disabled={loading} className={loading ? classes.disable : ""}>{loading ? "Loading..." : "SignUp"}</button>
                        <span>OR</span>
                        <Link href="/login" className={classes.reg}>Login</Link>
                    </form>
                </div>
            </div >
        </>
    )
}