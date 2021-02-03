import React, { useState, useEffect } from "react";
import Exercise from "./Exercise";
import axios from "axios";

const ExercisesList = () => {
  const [state, setState] = useState({ exercises: [] });

  const getExercises = async () => {
    try {
      const res = await axios.get(
        "https://attai-exercise-tracker.herokuapp.com/exercises"
      );
      const data = res.data.data;
      setState({ exercises: data });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExercises();
  }, []);

  const deleteExercise = async (id) => {
    try {
      axios.delete(
        `https://attai-exercise-tracker.herokuapp.com/exercises/${id}`
      );
      const removeExercise = state.exercises.filter(
        (exercise) => exercise._id !== id
      );
      setState({ exercises: removeExercise });
    } catch (error) {
      console.log(error);
    }
  };

  const exerciseList = () => {
    return state.exercises.map((exercise) => {
      return (
        <Exercise
          key={exercise._id}
          exercise={exercise}
          deleteExercise={deleteExercise}
        />
      );
    });
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col col-md-8 col-sm-12 mx-auto">
          <h3>Exercises</h3>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Username</th>
                <th scope="col">Description</th>
                <th scope="col">Duration</th>
                <th scope="col">Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>{exerciseList()}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ExercisesList;
