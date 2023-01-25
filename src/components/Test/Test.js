import React, {useState} from 'react';
import Button from '../common/common/Button';

const Test = () => {

    const [counter, setCounter] = useState(0)

    const increaseCounter = () =>{
        setCounter(counter+1);
    }

    return (
        <div>

            <h1>Test Component</h1>
            <p>{counter}</p>
            <Button onClick={increaseCounter}>
                Increase
            </Button>
        </div>
    )
    
}

export default Test;