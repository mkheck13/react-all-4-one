import { Card } from "flowbite-react"
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { useState } from "react";
import { restaurantPickerFetch } from "../services/services";

// pizzaMexicanFastFood

const RestaurantPickerComponent = () => {

    return (
        <div className="flex justify-center">
        <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Restaurant Picker Component
            </h5>

            <Link to='/'><Button color="failure">Home</Button></Link>
        </Card>
    </div>
    )


}

export default RestaurantPickerComponent;