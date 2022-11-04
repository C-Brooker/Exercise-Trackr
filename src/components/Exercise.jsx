const Exercise = () => {
  return (
    <tr>
      <td>username</td>
      <td>description</td>
      <td>duration</td>
      <td>date</td>
      <td>
        {/* <Link
          to={{
            pathname: "/edit/" + props.exercise._id,
            state: props.exercise._id,
          }}
        >
          edit
        </Link>{" "} */}
        edit
        |
        delete
        {/* <a href="#" onClick={() => props.deleteExercise(props.exercise._id)}>
          delete
        </a> */}
      </td>
    </tr>
  );
};

export default Exercise;
