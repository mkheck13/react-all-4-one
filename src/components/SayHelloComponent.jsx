import { Card } from "flowbite-react"

const SayHelloComponent = () => {

    return (
        
        <div className="flex justify-center bg-image bg-cover bg-fixed w-screen">
            <div className="flex justify-center m-52">
            <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Say Hello Component
            </h5>

            <a className="text-black" href="/">Home screen</a>
        </Card>
            </div>

    </div>
    )


}

export default SayHelloComponent;