import Exercise from "./Exercise.jsx";
import { useEffect, useState } from "react";

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);

  const getExercises = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    };

    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/exercises/`,
      options
    );
    const parsedResponse = await response.json();

    if (parsedResponse.status === 200) {
      setExercises(parsedResponse.body);
    }
  };

  useEffect(() => {
    getExercises();
  }, []);

  useEffect(() => {}, [exercises]);

  return (
    <div className="w-full">
      <div className="w full flex flex-col justify-between font-bold">
        <table className="text-xs m-2 border border-1 border-black shadow shadow-2xl sm:text-base">
          <thead className="bg-blue-600">
            <tr>
              <th>Exercise:</th>
              <th>Reps:</th>
              <th>Sets:</th>
              <th>Weight:</th>
              <th>Date:</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise) => {
              return <Exercise key={exercise._id} exercise={exercise} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExerciseList;
