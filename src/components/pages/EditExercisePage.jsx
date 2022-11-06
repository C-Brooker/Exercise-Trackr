import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineLoading } from "react-icons/ai";
import { useParams } from "react-router-dom";

const EditExercisePage = () => {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseSets, setExerciseSets] = useState(0);
  const [exerciseReps, setExerciseReps] = useState(0);
  const [exerciseWeight, setExerciseWeight] = useState(0);
  const [exerciseDate, setExerciseDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const id = useParams().id;

  const dateHandler = (e) => {
    setExerciseDate(e);
  };

  const getExercise = async () => {
    const options = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/exercises/${id}`,
      options
    );
    const parsedResponse = await response.json();
    if (parsedResponse.status === 200) {
      setExerciseName(parsedResponse.body.exerciseName);
      setExerciseReps(parsedResponse.body.exerciseReps);
      setExerciseSets(parsedResponse.body.exerciseSets);
      setExerciseWeight(parsedResponse.body.exerciseWeight);

      const dt = new Date(parsedResponse.body.exerciseDate);
      setExerciseDate(dt);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    const exercise = {
      exerciseName: exerciseName,
      exerciseReps: Number(exerciseReps),
      exerciseSets: Number(exerciseSets),
      exerciseWeight: Number(exerciseWeight),
      exerciseDate: exerciseDate,
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(exercise),
    };
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/exercises/update/${id}`,
      options
    );
    const postStatus = await response.json();
    if (postStatus.status === 200) {
      alert("Exercise sucessfully updated.");
      window.location = "/";
    } else {
      alert("Exercise unsuccessfully updated");
    }
    setLoading(false);
  };

  useEffect(() => {
    getExercise();
  }, []);
  useEffect(() => {}, [loading]);

  return (
    <div className="w-full">
      <div className="w-full min-w-full text-center">
        <h1 className="font-bold text-4xl my-8 text-wrap text-blue-600">
          Edit exercise
        </h1>
      </div>
      <div className="py-5 my-7 w-full h-full flex items-center justify-center">
        <form
          className="pt-5 px-2 h-90 flex flex-col space-y-5 w-8/12 items-center bg-gray-200 rounded-md shadow shadow-2xl hover:border hover:border-1 hover:border-black bg-gradient-to-b from-gray-200 to-gray-300"
          onSubmit={submitHandler}
        >
          {/* exercise name */}
          <div className="w-full flex flex-col items-center justify-center">
            <label className="text-lg font-bold ">Exercise name:</label>
            <input
              className="w-8/12 py-2 rounded-xl px-5 text-center"
              placeholder={"Type Exercise Name"}
              onChange={(e) => setExerciseName(e.target.value)}
              value={exerciseName}
            />
          </div>
          {/* reps and sets and freq */}
          <div className="w-full flex flex-row space-x-2 justify-center items-center">
            <div className="w-3/12 text-center">
              <label className="text-lg font-bold">Reps</label>
              <input
                className="p-2 rounded-xl w-full text-center"
                placeholder="input.."
                value={exerciseReps}
                type={"number"}
                min={1}
                onChange={(e) => setExerciseReps(e.target.value)}
              />
            </div>
            <div className="w-3/12 text-center">
              <label className="text-lg font-bold">Sets</label>
              <input
                className="p-2 rounded-xl w-full text-center"
                placeholder="input.."
                value={exerciseSets}
                type={"number"}
                min={1}
                onChange={(e) => setExerciseSets(e.target.value)}
              />
            </div>
            <div className="w-3/12 text-center">
              <label className="text-lg font-bold">Rest</label>
              <input
                className="p-2 rounded-xl w-full text-center "
                placeholder="input.."
                value={exerciseWeight}
                type={"number"}
                min={1}
                onChange={(e) => setExerciseWeight(e.target.value)}
              />
            </div>
          </div>
          {/* datepicker */}
          <div className="flex flex-col text-center items-center">
            <div className="text-lg font-bold">Start Date:</div>
            <div className="flex justify-center">
              <DatePicker
                className="px-1 w-6/12 rounded-md "
                locale="en"
                dateFormat="dd/MM/yyyy"
                selected={exerciseDate}
                onChange={(e) => dateHandler(e)}
              />
            </div>
          </div>
          {/* submit button */}
          <div className="w-full flex items-center justify-center">
            {loading ? (
              <AiOutlineLoading
                className="animate-spin font-bold my-3"
                size={40}
              />
            ) : (
              <button className="my-4 py-1 rounded-md bg-white w-3/12 text-lg font-bold hover:border hover:border1 hover:border-black">
                submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditExercisePage;
