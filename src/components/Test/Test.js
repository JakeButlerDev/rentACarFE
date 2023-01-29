import React, {useState, useEffect} from 'react';
import Button from '../common/Button';

const Test = () => {

    const [counter, setCounter] = useState(0);
    const [customer, setCustomer] = useState({});


    const increaseCounter = () =>{
        setCounter(counter+1);
    }

    useEffect(() => {
        const getCustomers = async() => {
            const res = await axios.get("localhost:5253/api/customers/");
            console.log(res.data);
        }
        getCustomers();
    }, [])

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