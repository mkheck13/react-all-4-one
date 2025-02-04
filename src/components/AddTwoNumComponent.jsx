import { Card } from "flowbite-react"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { addTwoNumFetch } from "../services/services";
import { useState } from "react";

const AddTwoNumComponent = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await addTwoNumFetch(num1, num2);
        setResult(response);
        getClear();
    }

    const getClear = () => {
        setNum1('');
        setNum2('');
    }

    return (
        <div className="flex justify-center">
        <Card className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Add Two Numbers Component
            </h5>
            <p className="text-black">result here:{result} </p>
            <input className="text-black" type="number" placeholder="Enter First Number" value={num1} onChange={(e) => setNum1(e.target.value)} />
            <input className="text-black" type="number" placeholder="Enter Second Number" value={num2} onChange={(e) => setNum2(e.target.value)} />
            <Button onClick={() => getResult()}>Submit</Button>

            <Link to='/'><Button color="failure">Home</Button></Link>
        </Card>
    </div>
    )


}

export default AddTwoNumComponent;