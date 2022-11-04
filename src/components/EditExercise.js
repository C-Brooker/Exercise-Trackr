const EditExercise = () => {
  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Username: </label>
        </div>
        <select
          ref={inputRef}
          required
          className="form-control"
          value={state.username}
          onChange={onChangeUsername}
        >
          {state.users?.map(function (user) {
            return (
              <option key={user} value={user}>
                {user}
              </option>
            );
          })}
          ;<option>{state.username}</option>
        </select>
        <div className="form-group">
          <label>Description: </label>
          <input
            type="text"
            required
            className="form-control"
            value={state.description}
            onChange={onChangeDescription}
          />
        </div>
        <div className="form-group">
          <label>Duration: </label>
          <input
            type="text"
            required
            className="form-control"
            value={state.duration}
            onChange={onChangeDuration}
          />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker selected={state.date} onChange={onChangeDate} />
          </div>
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Edit Exercise Log"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
