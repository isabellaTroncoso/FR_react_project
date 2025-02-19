import { addNumbers, celsiusToFahrenheit, isAdult } from "~/types/utils";
import styles from "../welcome/welcome.module.css"

/* My three Functions*/
export const MyThreeFunctions = () => {
  const sum = addNumbers(10, 5);

  const age = 20;
  const isUserAdult = isAdult(age);

  const celsiusInput = 25;
  const fahrenheit = celsiusToFahrenheit(celsiusInput);

  return (
    <div className={styles.functionsContent}>
      <h3>Mina 3 funktioner</h3>
      <p><strong>Addition:</strong> Summan av 10 + 5 = {sum}</p>
      <p><strong>Boolean:</strong> Ålder: {age}, {isUserAdult ? "Du är myndig" : "Du är inte myndig"}</p>
      <p><strong>Typad returvärde:</strong> Temperatur {celsiusInput}°C är {fahrenheit}°F</p>
    </div>
  );
};
export default MyThreeFunctions;