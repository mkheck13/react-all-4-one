import { Card } from "flowbite-react"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useState } from "react";
import { pizzaPickerFetch,mexicanPickerFetch, fastFoodPickerFetch } from "../services/services";

// pizzaMexicanFastFood

const RestaurantPickerComponent = () => {
    const [result, setResult] = useState('');

    const getPizzaResult = async () => {
        const response = await pizzaPickerFetch();
        setResult(response);
    }

    const getMexicanResult = async () => {
        const response = await mexicanPickerFetch();
        setResult(response);
    }

    const getFastFoodResult = async () => {
        const response = await fastFoodPickerFetch();
        setResult(response);
    }

    return (
        <div className="flex justify-center">
        <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Restaurant Picker Component
            </h5>
            <p className="text-black">result here:{result} </p>
            <Button onClick={() => getPizzaResult()}>Pizza</Button>
            <Button onClick={() => getMexicanResult()}>Mexican</Button>
            <Button onClick={() => getFastFoodResult()}>Fast Food</Button>

            <Link to='/'><Button color="failure">Home</Button></Link>
        </Card>
    </div>
    )


}

export default RestaurantPickerComponent;