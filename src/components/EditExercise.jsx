import { useState } from "react";
import { DatePicker } from "react-datepicker";

const EditExercise = () => {
  const [users, setUsers] = useState();
  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <form>
        <div className="form-group">
          <label>Username: </label>
        </div>
        <select required className="form-control">
          {users.map(function (user) {
            return (
              <option key={user} value={user}>
                {user}
              </option>
            );
          })}
          ;<option>username</option>
        </select>
        <div className="form-group">
          <label>Description: </label>
          <input type="text" required className="form-control" />
        </div>
        <div className="form-group">
          <label>Duration: </label>
          <input type="text" required className="form-control" />
        </div>
        <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker />
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
