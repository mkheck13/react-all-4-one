import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const HomeComponent = () => {

    return (
        <div className='bg-image w-screen h-screen'>
            <h1>All 4 One</h1>
            
            <Link to='/hello'><Button color="failure">Say Hello</Button></Link>
            <Link to='/addNum'><Button color="failure">Add Num</Button></Link>
            <Link to='/askQuestion'><Button color="failure">Asking Questions</Button></Link>
            <Link to='/greater'><Button color="failure">Greater Then</Button></Link>
            <Link to='/madlib'><Button color="failure">Madlib</Button></Link>
            <Link to='/magic8'><Button color="failure">Magic 8</Button></Link>
            <Link to='/oddEven'><Button color="failure">Odd or Even</Button></Link>
            <Link to='/picker'><Button color="failure">Restaurant Picker</Button></Link>
            <Link to='/revNum'><Button color="failure">Rev Num</Button></Link>
            <Link to='/revAlpha'><Button color="failure">Rev Alpha</Button></Link>

        </div>
    )


}

export default HomeComponent;