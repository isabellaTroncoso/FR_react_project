import { useState } from "react";
import CustomButton from "~/components/CustomButton";
import type { User } from "~/types/User";
import styles from "../welcome/welcome.module.css"

export function About (){

    const user: User = {
        username: "Secret",
        password: "**************",
        age: 15
      };
    
      const [userInfo, setUserInfo] = useState<string>("");
    
      const showUsername = () => setUserInfo(user.username);
      const showPassword = () => setUserInfo(user.password);
      const showAge = () => setUserInfo(user.age.toString())
    
      return (
        <div className={styles.interfaceContent}>
            <h3>My User Information</h3>
            <CustomButton buttonText="Username" userData={user} onClick={showUsername}/>
            <CustomButton buttonText="Password" userData={user} onClick={showPassword}/>
            <CustomButton buttonText="Age" userData={user} onClick={showAge}/>
    
            <p>{userInfo}</p>
        
        </div>
      );
    };
export default About;