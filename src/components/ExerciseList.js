const ExerciseList = () => {
  return (
    <ul>
      {
        exercises.map(exercise) => {
          return (
            <Exercise
              exercise={currentExercise}
              deleteExercise={this.deleteExercise}
              key={currentexercise._id}
            />
          )
      }}
  </ul>
  );
};

export default ExerciseList;
