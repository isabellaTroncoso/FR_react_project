import { useState } from "react";
import type { User } from "~/types/User";
import CustomButton from "./CustomButton";



const MyInterface: React.FC = () => {
  const user: User = {
    username: "Bellz99",
    password: "*****",
    age: 25
  };

  const [userInfo, setUserInfo] = useState<string>("");

  const showUsername = () => setUserInfo(user.username);
  const showPassword = () => setUserInfo(user.password);
  const showAge = () => setUserInfo(user.age.toString())

  return (
    <div className="interface-content">
        <h3>My User Information</h3>
        <CustomButton buttonText="Username" userData={user} onClick={showUsername}/>
        <CustomButton buttonText="Password" userData={user} onClick={showPassword}/>
        <CustomButton buttonText="Age" userData={user} onClick={showAge}/>

        <p>{userInfo}</p>
    
    </div>
  );
};

export default MyInterface;

