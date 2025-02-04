import { Card } from "flowbite-react"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

const SayHelloComponent = () => {

    return (
        
        <div className="flex justify-center bg-image bg-cover bg-fixed w-screen">
            <div className="flex justify-center m-52">
            <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Say Hello Component
            </h5>

            <Link to='/'><Button color="failure">Home</Button></Link>
        </Card>
            </div>

    </div>
    )


}

export default SayHelloComponent;