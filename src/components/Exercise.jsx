import { Link } from "react-router-dom";

const Exercise = ({ exercise }) => {
  const dt = new Date(exercise.exerciseDate);
  const date = dt.toLocaleDateString();
  const id = exercise._id;

  const deleteExercise = async () => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: null,
    };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/exercises/${id}`,
      options
    );
    const parseRes = await response.json();

    if (parseRes.status === 200) {
      alert(`Exercise ${id} Successfully Deleted!`);
    } else {
      alert(`Exercise ${id} Unsuccessfully Deleted!`);
    }
  };

  return (
    <tr className="text-center border border-2 border-r border-black bg-gradient-to-b from-gray-200 to-gray-300">
      <td>{exercise.exerciseName}</td>
      <td>{exercise.exerciseReps}</td>
      <td>{exercise.exerciseSets}</td>
      <td>{`${exercise.exerciseWeight} KG`}</td>
      <td>{date}</td>
      <td>
        <Link
          className="hover:underline"
          to={{
            pathname: `/edit/${id}`,
          }}
        >
          edit
        </Link>
      </td>
      <td>
        <button className="hover:underline" onClick={deleteExercise}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default Exercise;
