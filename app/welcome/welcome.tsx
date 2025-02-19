import { Link } from "react-router-dom";
import CountButton from "~/components/CountButton";
import MyThreeFunctions from "~/components/MyThreeFunctions";
import MyInterface from "~/components/MyInterface";
import { StudentInfo } from "~/components/StudentInfo";
import styles from "./welcome.module.css";
import "./global.css";


export function Welcome() {

  return (
    <>

    <div className={styles.centeredContent}>
   <h1 className={styles.title}>Welcome to my page</h1>

    <div className={styles.links}>
    <Link to="/start">Start page</Link>
    <Link to="/about">About page</Link>
    </div>

    <CountButton />
    
    <div className={styles.mainContent}>
    <MyThreeFunctions />
    <MyInterface />
    <StudentInfo />
    </div>

    </div>
    
    </>

  );

};
