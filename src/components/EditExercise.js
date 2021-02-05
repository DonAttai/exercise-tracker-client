import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const EditExercise = () => {
  const [exercise, setExercise] = useState({
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: [],
  });

  const { id } = useParams();
  const getExercise = async () => {
    try {
      const res = await axios.get(
        `https://attai-exercise-tracker.herokuapp.com/exercises/${id}`
      );
      const data = await res.data.data;
      setExercise({
        ...exercise,
        username: data.username,
        description: data.description,
        duration: data.duration,
        date: new Date(data.date),
        users: [...exercise.users, data.username],
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getUser = async () => {
    try {
      const res = await axios.get(
        "https://attai-exercise-tracker.herokuapp.com/users/"
      );
      const data = await res.data.data;
      if (data.length > 0) {
        setExercise({
          ...exercise,
          users: data.map((user) => user.username),
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
    if (exercise.users) {
      getExercise();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setExercise({ ...exercise, [name]: value });
  };

  const onChangeDate = (date) => {
    setExercise({ ...exercise, date: date });
  };

  const updateExercise = async () => {
    try {
      await axios.patch(
        `https://attai-exercise-tracker.herokuapp.com/exercises/${id}`,
        exercise
      );
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (
      exercise.username &&
      exercise.description &&
      exercise.duration &&
      exercise.date
    ) {
      updateExercise();
      console.log(exercise);
      setExercise({ ...exercise, username: "", description: "" });
    }

    window.location = "/";
  };

  return (
    <>
      <div className="row mt-3">
        <div className="col col-md-6 col-sm-12 mx-auto">
          <div className="card card-body">
            <h3>Edit Exercise</h3>
            <form onSubmit={onSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <select
                  name="username"
                  id="username"
                  value={exercise.username}
                  onChange={handleChange}
                  className="form-control"
                  required
                >
                  {exercise.users.map((user) => {
                    return (
                      <option key={user} value={user}>
                        {user}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <input
                  type="text"
                  value={exercise.description}
                  name="description"
                  id="description"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="duration">Duration (in mins):</label>
                <input
                  type="text"
                  value={exercise.duration}
                  name="duration"
                  id="duration"
                  className="form-control"
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="date">Date:</label>
                <div>
                  <DatePicker
                    selected={exercise.date}
                    onChange={onChangeDate}
                  />
                </div>
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Edit Exercise"
                  className="btn btn-primary btn-sm"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditExercise;
