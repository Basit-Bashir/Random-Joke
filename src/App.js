import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );
      setJoke(response.data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md shadow-black w-96">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Random Jokes App
        </h1>
        <Joke joke={joke} />
        <Button onClick={fetchJoke} />
      </div>
    </div>
  );
}

function Joke({ joke }) {
  return (
    <div className="mb-4">
      <p className="text-lg font-semibold">{joke}</p>
    </div>
  );
}

function Button({ onClick }) {
  return (
    <button
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded tracking-[1px]"
      onClick={onClick}
    >
      New Joke
    </button>
  );
}

export default App;
