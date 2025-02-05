import { Card } from "flowbite-react"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useState } from "react";
import { askingQuestionsFetch } from "../services/services";

const AskingQuestionsComponent = () => {
    const [userName, setUserName] = useState('');
    const [wakeUpTime, setWakeUpTime] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await askingQuestionsFetch(userName, wakeUpTime);
        setResult(response);
        getClear();
    }

    const getClear = () => {
        setUserName('');
        setWakeUpTime('');
    }

    return (
        <div className="flex justify-center">
        <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Asking Questions
            </h5>
            <p className="text-black">result here:{result} </p>
            <input className="text-black" type="text" placeholder="Enter Your Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input className="text-black" type="number" placeholder="Enter Time You Woke Up (1 - 12)" value={wakeUpTime} onChange={(e) => setWakeUpTime(e.target.value)} />
            <Button onClick={() => getResult()}>Submit</Button>

            <Link to='/'><Button color="failure">Home</Button></Link>
        </Card>
    </div>
    )
}

export default AskingQuestionsComponent;