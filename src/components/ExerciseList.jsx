import Exercise from "./Exercise.jsx";
import { useState } from "react";

const ExerciseList = () => {
  const [exercises, setExercise] = useState([]);

  return (
    <div className="w-full">
      <div className="w full flex justify-between font-bold">
        <div>
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
      </div>
      <div className="ff"></div>
    </div>
  );
};

export default ExerciseList;
