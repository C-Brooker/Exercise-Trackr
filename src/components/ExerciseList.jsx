import Exercise from "./Exercise.jsx";
import { useState } from "react";

const ExerciseList = () => {
  const [exercises, setExercise] = useState([]);

  return (
    <ul>
      {exercises.map((exercise) => {
        return (
          <Exercise
            exercise={exercise}
            deleteExercise={() => alert("delete exercise")}
            key={"hi"}
          />
        );
      })}
    </ul>
  );
};

export default ExerciseList;
