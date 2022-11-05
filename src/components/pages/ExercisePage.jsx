import Exercise from "../Exercise";
import ExerciseList from "../ExerciseList";

const ExercisePage = () => {
  return (
    <div className="w-full">
      <div className="w-full min-w-full text-center">
        <h1 className="font-bold text-4xl my-8 text-wrap text-blue-600">
          Add exercise to plan
        </h1>
      </div>
      <div className="py-5 my-10 w-full h-full flex items-center justify-center">
        <ExerciseList />
      </div>
    </div>
  );
};

export default ExercisePage;
