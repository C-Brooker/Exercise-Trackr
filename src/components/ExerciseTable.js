const ExerciseTable = () => {
  return (
    <div>
      <h3>Logged Exercise</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{this.exerciseList()}</tbody>
      </table>
    </div>
  );
};

export default ExerciseTable;
