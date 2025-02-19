import { subNumbers, isAdult, celsiusToFahrenheit } from "~/types/utils";
import styles from "../welcome/welcome.module.css"

export function Start (){
const sum = subNumbers(123, 54);

  const age = 15;
  const isUserAdult = isAdult(age);

  const celsiusInput = 45;
  const fahrenheit = celsiusToFahrenheit(celsiusInput);

  return (
    <div className={styles.functionsContent}>
      <h3>Mina 3 funktioner</h3>
      <p><strong>Addition:</strong> Summan av 123 - 54 = {sum}</p>
      <p><strong>Boolean:</strong> Ålder: {age}, {isUserAdult ? "Du är myndig" : "Du är inte myndig"}</p>
      <p><strong>Typad returvärde:</strong> Temperatur {celsiusInput}°C är {fahrenheit}°F</p>
       
    </div>
  );
};

export default Start;