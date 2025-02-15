import { useState } from "react";

export function stateExample () {
const [count, setCount] = useState(0)

const updateState = () => {
setCount(count + 1);
};

return (
    <div>
    <h2>Count: {count}</h2>

    <button onClick={updateState} className="btn">Click me</button>
    </div>

   
)



}

export default stateExample;
