import mongoose from "mongoose";
import { Link } from "react-router-dom";

const Exercise = ({ exercise }) => {
  const dt = new Date(exercise.exerciseDate);
  const date = dt.toLocaleDateString();
  const id = exercise._id;
  const exerciseLog = `${date}: ${exercise.exerciseName} performed for ${exercise.exerciseSets} sets of ${exercise.exerciseReps} reps ${exercise.exerciseFreq} times per week`;

  const deleteExercise = async () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    alert(`http://localhost:5000/delete/${id}`);
    const response = await fetch(
      `http://localhost:5000/delete/${mongoose.Types.ObjectId(id)}`,
      options
    );
    const parseRes = await response.json();

    if (parseRes.status == 200) {
      alert(`Exercise ${id} Successfully Deleted!`);
    } else {
      alert(`Exercise ${id} Unsuccessfully Deleted!`);
    }
  };

  return (
    <div className="flex flex-row justify-between ">
      <div>{exerciseLog}</div>
      <div>
        <Link
          to={{
            pathname: `/edit/${id}`,
          }}
        >
          edit
        </Link>{" "}
        {/* <div>
          <button onClick={deleteExercise}>delete</button>
        </div> */}
      </div>
    </div>
  );
};

export default Exercise;
