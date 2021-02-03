import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [user, setUser] = useState({ username: "" });

  const addUser = async () => {
    try {
      const res = await axios.post("http://localhost:5000/users", user);
      const data = res.data.data;
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.username) {
      addUser();
      setUser({ ...user, username: "" });
    }
  };

  const onChangeUser = (e) => {
    setUser({ username: e.target.value });
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col col-md-6 col-sm-12 mx-auto">
          <div className="card card-body">
            <h3>Create User</h3>
            <form autoComplete="off">
              <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input
                  type="text"
                  value={user.username}
                  onChange={onChangeUser}
                  name="username"
                  className="form-control"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-sm float-right"
                onClick={handleSubmit}
              >
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
