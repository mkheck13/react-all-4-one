import { Card } from "flowbite-react"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useState } from "react";
import { madlibFetch } from "../services/services";

const MadlibComponent = () => {
    const [age, setAge] = useState('');
    const [familyRelation, setFamilyRelation] = useState('');
    const [job, setJob] = useState('');
    const [stageOfLife, setStageOfLife] = useState('');
    const [thing, setThing] = useState('');
    const [humanSettlment, setHumanSettlment] = useState('');
    const [toyBrand, setToyBrand] = useState('');
    const [size, setSize] = useState('');
    const [profession, setProfession] = useState('');
    const [celestialBody, setCelestialBody] = useState('');
    const [result, setResult] = useState('');

    const getResult = async () => {
        const response = await madlibFetch(age, familyRelation, job, stageOfLife, thing, size, humanSettlment, toyBrand, profession, celestialBody);
        setResult(response);
        getClear();
    }

    const getClear = () => {
        setAge('');
        setFamilyRelation('');
        setJob('');
        setStageOfLife('');
        setThing('');
        setSize('');
        setHumanSettlment('');
        setToyBrand('');
        setProfession('');
        setCelestialBody('');
    }

    return (
        <div className="flex justify-center">
        <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Madlib Component
            </h5>
            <p className="text-black">result here:{result} </p>
            <input className="text-black" type="text" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
            <input className="text-black" type="text" placeholder="Family Relation" value={familyRelation} onChange={(e) => setFamilyRelation(e.target.value)} />

            <input className="text-black" type="text" placeholder="Job" value={job} onChange={(e) => setJob(e.target.value)} />
            <input className="text-black" type="text" placeholder="Stage Of Life" value={stageOfLife} onChange={(e) => setStageOfLife(e.target.value)} />

            <input className="text-black" type="text" placeholder="Thing" value={thing} onChange={(e) => setThing(e.target.value)} />
            <input className="text-black" type="text" placeholder="Size" value={size} onChange={(e) => setSize(e.target.value)} />

            <input className="text-black" type="text" placeholder="Human Settlement" value={humanSettlment} onChange={(e) => setHumanSettlment(e.target.value)} />
            <input className="text-black" type="text" placeholder="Toy Brand" value={toyBrand} onChange={(e) => setToyBrand(e.target.value)} />

            <input className="text-black" type="text" placeholder="Profession" value={profession} onChange={(e) => setProfession(e.target.value)} />
            <input className="text-black" type="text" placeholder="Celestial Body" value={celestialBody} onChange={(e) => setCelestialBody(e.target.value)} />
            <Button onClick={() => getResult()}>Submit</Button>

            <Link to='/'><Button color="failure">Home</Button></Link>
        </Card>
    </div>
    )
}

export default MadlibComponent;