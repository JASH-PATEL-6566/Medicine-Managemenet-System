import classes from '../styles/home.module.css';
import Image from 'next/image';
import easyToManage from '../Images/easyToManage.webp';
import userFriendly from '../Images/userFriendly.webp';
import alwaysImproving from '../Images/alwaysImproving.webp';
import Head from 'next/Head';

export default function Home() {
  return (
    <>
      <Head>
        <meta name="description" content="Easy to manage Stock" />
        <meta name="description" content="stock management system" />
        <meta name="description" content="user friendly stock management system" />
        <title>MedAssist.io</title>
      </Head>
      <div className={classes.main_container}>
        <div className={classes.sub_conatiner}>
          <div className={classes.content}>
            <h1>Easy to Manage Stock!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni. Sed non hic deleniti, illo temporibus minima molestias facilis enim placeat. Dolor ducimus similique totam laudantium magnam eveniet quod atque pariatur. Eaque, consequuntur eligendi!</p>
          </div>
          <div className={classes.img}>
            <Image
              src={easyToManage}
              width={300}
              height={300}
              alt="Management"
              priority="performance"
            />
          </div>
        </div>
        <div className={classes.sub_conatiner_rev}>
          <div className={classes.content}>
            <h1>User Friendly Interface!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni. Sed non hic deleniti, illo temporibus minima molestias facilis enim placeat. Dolor ducimus similique totam laudantium magnam eveniet quod atque pariatur. Eaque, consequuntur eligendi!</p>
          </div>
          <div className={classes.img}>
            <Image
              src={userFriendly}
              width={300}
              height={300}
              alt="Management"
              priority="performance"
            />
          </div>
        </div>
        <div className={classes.sub_conatiner}>
          <div className={classes.content}>
            <h1> always updating!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, magni. Sed non hic deleniti, illo temporibus minima molestias facilis enim placeat. Dolor ducimus similique totam laudantium magnam eveniet quod atque pariatur. Eaque, consequuntur eligendi!</p>
          </div>
          <div className={classes.img}>
            <Image
              src={alwaysImproving}
              width={300}
              height={300}
              alt="Management"
              priority="performance"
            />
          </div>
        </div>
      </div>
    </>
  )
}