import { useState } from "react";
import countStyles from "./CountButton.module.css";

export function CountButton () {
const [count, setCount] = useState(0)

const updateState = () => {
setCount(count + 1);
};

return (
    <div>
    <h2>Count: {count}</h2>

    <button onClick={updateState} className={countStyles.btn}>Click me</button>
    </div>

   );

};

export default CountButton;
