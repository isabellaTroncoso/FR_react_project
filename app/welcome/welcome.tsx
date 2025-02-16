import { Link } from "react-router-dom";
import CountButton from "~/components/CountButton";
import "~/components/CountButton.css";
import "./welcome.css";
import { addNumbers, celsiusToFahrenheit, isAdult } from "~/types/utils";
import MyInterface from "~/components/MyInterface";
import "~/components/CustomButton.css"

/* My three Functions*/
const MyTwoFunctions: React.FC = () => {
  const sum = addNumbers(10, 5);

  const age = 20;
  const isUserAdult = isAdult(age);

  const celsiusInput = 25;
  const fahrenheit = celsiusToFahrenheit(celsiusInput);

  return (
    <div className="functions-content">
      <h3>Mina 3 funktioner</h3>
      <p><strong>Addition:</strong> Summan av 10 + 5 = {sum}</p>
      <p><strong>Boolean:</strong> Ålder: {age}, {isUserAdult ? "Du är myndig" : "Du är inte myndig"}</p>
      <p><strong>Typad returvärde:</strong> Temperatur {celsiusInput}°C är {fahrenheit}°F</p>
    </div>
  );
};


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
    <MyTwoFunctions />
    <MyInterface />
    </div>

    </div>
    </>

  );

}
