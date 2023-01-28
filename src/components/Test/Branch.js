import React, {useState} from "react";
import Button from '..common/common/Button';

const Branch = () => {
    
    const [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter+1);
    }

    return (
        <div>
            <h1>Branch</h1>
            <p>{counter}</p>
            <Button onClick={increaseCounter}>
                Increase
            </Button>
        </div>
    )
}

export default Branch;