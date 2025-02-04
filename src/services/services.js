// Say Hello Fetch
const sayHelloFetch = async (userName) => {
    const response = await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net//SayHello/SayHello/${userName}`);
    const data = await response.text();

    return data;
}

// Add Two Numbers Fetch
const addTwoNumFetch = async (num1, num2) => {
    const response = await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/AddTwoNumbers/AddTwoNumbers/${num1}/${num2}`);
    const data = await response.text();

    return data;
}

// Asking Questions Fetch
const askingQuestionsFetch = async (userName, wakeUpTime) => {
    const response = await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/AskingQuestions/AskingQuestions/${userName}/${wakeUpTime}`);
    const data = await response.text();

    return data;
}

// Greater Then Fetch
const greaterThenFetch = async (num1, num2) => {
    const response = await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/GreaterThen/GreaterThen/${num1}/${num2}`);
    const data = await response.text();

    return data;
}

// Madlib Fetch
const madlibFetch = async (age, familyRelation, job, stageOfLife, thing, size, humanSettlment, toyBrand, profession, celestialBody) => {
    const response = await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/MabLib/MabLib/${age}/${familyRelation}/${job}/${stageOfLife}/${thing}/${size}/${humanSettlment}/${toyBrand}/${profession}/${celestialBody}`);
    const data = await response.text();

    return data;
}

// Magic 8 Ball Fetch
const magic8BallFetch = async (input) => {
    const response = await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/MagicEightBall/Question/${input}`);
    const data = await response.text();

    return data;
}

// Odd Or Even Fetch
const oddOrEvenFetch = async (input) => {
    const response = await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/OddOrEven/OddOrEven/${input}`);
    const data = await response.text();

    return data;
}

// Restaurant Picker Fetch
const restaurantPickerFetch = async (pizzaMexicanFastFood) => {
    const response = await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/RestaurantPicker/RestaurantPicker/${pizzaMexicanFastFood}`);
    const data = await response.text();

    return data;
}

// Reverse It Alpha Fetch
const revAlphaFetch = async (input) => {
    const response = await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/ReverseItAlpha/ReverseAlpha/${input}`);
    const data = await response.text();

    return data;
}

// Reverse It Num Fetch
const revNumFetch = async (userNum) => {
    const response = await fetch(`https://thisall4oneapi-bbfxghbaeaegbuc3.westus-01.azurewebsites.net/ReverseItNum/ReverseItNum/${userNum}`);
    const data = await response.text();

    return data;
}

// Exports
export { sayHelloFetch, addTwoNumFetch, askingQuestionsFetch, greaterThenFetch, madlibFetch, magic8BallFetch, oddOrEvenFetch, restaurantPickerFetch, revAlphaFetch, revNumFetch }