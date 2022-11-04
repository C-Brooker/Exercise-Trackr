import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineLoading } from "react-icons/ai";

const CreateExercisePage = () => {
  const [exerciseName, setExerciseName] = useState("");
  const [exerciseSets, setExerciseSets] = useState(0);
  const [exerciseReps, setExerciseReps] = useState(0);
  const [exerciseFreq, setExerciseFreq] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    setLoading(true);

    const exercise = {
      exerciseName: exerciseName,
      exerciseReps: Number(exerciseReps),
      exerciseSets: Number(exerciseSets),
      exerciseFreq: Number(exerciseFreq),
      selectDate: selectedDate.toLocaleDateString(),
    };
    alert(JSON.stringify(exercise));
    const response = await fetch("http://localhost:5000/create", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: exercise,
    });
    const postStatus = await response.json();
    if (postStatus == 200) {
      alert("Exercise sucessfully added.");
    } else alert("Exercise unsuccessfully added\n" + postStatus.message);
    setLoading(false);
  };

  useEffect(() => {}, [loading]);

  return (
    <div className="w-full">
      <div className="w-full min-w-full text-center">
        <h1 className="font-bold text-4xl my-8 text-wrap text-blue-600">
          Add exercise to plan
        </h1>
      </div>
      <div className="py-5 my-10 w-full h-full flex items-center justify-center">
        <form
          className="pt-5 px-2 h-80 flex flex-col space-y-2 w-8/12 items-center bg-gray-200 rounded-md shadow shadow-xl hover:border hover:border-1 hover:border-black"
          onSubmit={submitHandler}
        >
          {/* exercise name */}
          <div className="w-full flex flex-col items-center justify-center">
            <label className="text-lg font-bold">Exercise name:</label>
            <input
              className="w-8/12 py-2 rounded-xl px-5"
              placeholder={"Type Exercise Name"}
              onChange={(e) => setExerciseName(e.target.value)}
              value={exerciseName}
            />
          </div>
          {/* reps and sets and freq */}
          <div className="w-full flex flex-col sm:flex-row space-x-2 justify-center items-center">
            <div className="w-3/12 bg-gray-200 text-center">
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
            <div className="w-3/12 bg-gray-200 text-center">
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
            <div className="w-3/12 bg-gray-200 text-center">
              <label className="text-lg font-bold">Rest</label>
              <input
                className="p-2 rounded-xl w-full text-center "
                placeholder="input.."
                value={exerciseFreq}
                type={"number"}
                min={1}
                onChange={(e) => setExerciseFreq(e.target.value)}
              />
            </div>
          </div>
          {/* datepicker */}
          <div className="flex flex-col text-center items-center">
            <div className="text-lg font-bold">Start Date:</div>
            <div className="flex justify-center">
              <DatePicker
                className="px-1 w-6/12 rounded-md "
                selected={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
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

export default CreateExercisePage;
