import { Card } from "flowbite-react"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { sayHelloFetch } from "../services/services";
import { useState } from "react";

const SayHelloComponent = () => {
    const [userName, setUserName] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await sayHelloFetch(userName);
        setResult(response);
    }

    return (
        
        <div className="flex justify-center bg-image bg-cover bg-fixed w-screen">
            <div className="flex justify-center m-52">
            <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Say Hello Component
            </h5>
            <p className="text-black">result here:{result} </p>
            <input type="text" placeholder="Enter Name" onChange={(e) => setUserName(e.target.value)} />
            <Button onClick={() => getResult()}>Submit</Button>

            <Link to='/'><Button color="failure">Home</Button></Link>
        </Card>
            </div>

    </div>
    )


}

export default SayHelloComponent;