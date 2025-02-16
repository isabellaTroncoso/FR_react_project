import { Link } from "react-router-dom";
import CountButton from "~/components/CountButton";
import "~/components/CountButton.css";
import "./welcome.css";
import MyThreeFunctions from "~/components/MyThreeFunctions";
import MyInterface from "~/components/MyInterface";
import "~/components/CustomButton.css"



export function Welcome() {

  return (
    <>

    <div className="centered-content">
   <h1>Welcome to my page</h1>

    <div className="links">
    <Link to="/start">Start page</Link>
    <Link to="/about">About page</Link>
    </div>

    <CountButton />
    
    <div className="main-content">
    <MyThreeFunctions />
    <MyInterface />
    </div>

    </div>
    
    </>

  );

};
