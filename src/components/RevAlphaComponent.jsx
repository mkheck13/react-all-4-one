import { Card } from "flowbite-react"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useState } from "react";
import { revAlphaFetch } from "../services/services";

// input

const RevAlphaComponent = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await revAlphaFetch(input);
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
                Reverse It Alpha Component
            </h5>
            <p className="text-black">result here:{result} </p>
            <input className="text-black" type="text" placeholder="Enter A String" value={input} onChange={(e) => setInput(e.target.value)} />
            <Button onClick={() => getResult()}>Submit</Button>

            <Link to='/'><Button color="failure">Home</Button></Link>
        </Card>
    </div>
    )


}

export default RevAlphaComponent;