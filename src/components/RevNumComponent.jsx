import { Card } from "flowbite-react"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useState } from "react";
import { revNumFetch } from "../services/services";

// userNum

const RevNumComponent = () => {
    const [userNum, setUserNum] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await revNumFetch(userNum);
        setResult(response);
        getClear();
    }

    const getClear = () => {
        setInput('');
    }

    return (
        <div className="flex justify-center">
        <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Reverse It Num Component
            </h5>
            <p className="text-black">result here:{result} </p>
            <input className="text-black" type="number" placeholder="Enter A Number" value={userNum} onChange={(e) => setUserNum(e.target.value)} />
            <Button onClick={() => getResult()}>Submit</Button>
   
            <Link to='/'><Button color="failure">Home</Button></Link>
        </Card>
    </div>
    )


}

export default RevNumComponent;