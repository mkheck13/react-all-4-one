import { Card } from "flowbite-react"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useState } from "react";
import { magic8BallFetch } from "../services/services";

const Magic8BallComponent = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await magic8BallFetch(input);
        setResult(response);
        getClear();
    }

    const getClear = () => {
        setInput('');
    }

    return (
        <div className="flex justify-center mt-32">
        <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Magic 8 Ball Component
            </h5>
            <p className="text-black">result here:{result} </p>
            <input className="text-black" type="text" placeholder="Enter Question" value={input} onChange={(e) => setInput(e.target.value)} />
            <Button onClick={() => getResult()}>Submit</Button>

            <Link to='/'><Button color="failure">Home</Button></Link>
        </Card>
    </div>
    )
}

export default Magic8BallComponent;