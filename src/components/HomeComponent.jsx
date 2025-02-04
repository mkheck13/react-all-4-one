import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const HomeComponent = () => {

    return (
        <div className='bg-image w-screen h-screen'>
            <h1>All 4 One</h1>
            <Button color="failure"><Link to='/hello'>Say Hello</Link></Button>
            <Link to='/addNum'><Button color="failure">Add Num</Button></Link>

            {/* <a href="/hello">Say Hello</a> */}
            {/* <a href="/addNum">Add Two Numbers</a>
            <a href="/askQuestion">Asking Questions</a>
            <a href="/greater">Greater Then</a>
            <a href="/madlib">Madlib</a>
            <a href="/magic8">Magic 8</a>
            <a href="/oddEven">Odd or Even</a>
            <a href="/picker">Restaurant Picker</a>
            <a href="/revNum">Rev Num</a>
            <a href="/revAlpha">Rev Alpha</a> */}
        </div>
    )


}

export default HomeComponent;