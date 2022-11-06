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
    const colHeadings = {
      exerciseName: "Exercise",
      exerciseReps: "Reps",
      exerciseSets: "Sets",
      exerciseFreq: "Freq",
      exerciseDate: "Date",
    };
    if (parsedResponse.status == 200) {
      const exerciseList = [colHeadings, ...parsedResponse.body];
      setExercises(exerciseList);
    }
  };

  useEffect(() => {
    getExercises();
  }, []);

  useEffect(() => {}, [exercises]);

  return (
    <div className="w-full">
      <div className="w full flex flex-col justify-between font-bold">
        {exercises.map((exercise) => {
          return <Exercise exercise={exercise} />;
        })}
        {/* <div>
          <h2>Exercise Name:</h2>
        </div>
        <div>
          <h2>Reps:</h2>
        </div>
        <div>
          <h2>Sets:</h2>
        </div>
        <div>
          <h2>Frequency:</h2>
        </div>
        <div>
          <h2>Date:</h2>
        </div>
      </div> */}
      </div>
    </div>
  );
};

export default ExerciseList;
