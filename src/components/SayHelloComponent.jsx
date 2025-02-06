import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { sayHelloFetch } from "../services/services";
import { useState } from "react";

const SayHelloComponent = () => {
  const [userName, setUserName] = useState("");
  const [result, setResult] = useState("");

  const getResult = async () => {
    const response = await sayHelloFetch(userName);
    setResult(response);
    getClear();
  };

  const getClear = () => {
    setUserName("");
  };

  return (
    <div className="overflow-auto font-sue text-gray-300  w-screen h-screen">
      <header className="flex justify-evenly place-items-center">
        <h1 className="text-5xl my-20 flex justify-center md:text-9xl sm:text-7xl">
          Say Hello
        </h1>
        <Link to="/">
          <Button className="w-52 text-3xl" color="failure">
            Home
          </Button>
        </Link>
      </header>

      <main className="place-items-center mt-10">
        <div className="place-items-center mt-10">
          <h1 className="text-4xl">
            Please enter your name and press the button to get a greeting.
            {result}
          </h1>
        </div>
        <div className="place-items-center mt-10">
          <input
            className="text-black bg-gray-50 border border-gray-300 text-2xl w-52 rounded-lg"
            type="text"
            placeholder="Enter Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="place-items-center mt-10">
          <Button
            className="w-52 text-3xl border-none"
            onClick={() => getResult()}
            color="failure"
          >
            Press Me
          </Button>
        </div>
      </main>
    </div>
  );
};

export default SayHelloComponent;
