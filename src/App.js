import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import CreateExercise from "./components/CreateExercise";
import EditExercise from "./components/EditExercise";
import ExercisesList from "./components/ExercisesList";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Route path="/" exact children={<ExercisesList />} />
        <Route path="/edit/:id" children={<EditExercise />} />
        <Route path="/create" children={<CreateExercise />} />
        <Route path="/user" children={<CreateUser />} />
      </div>
    </Router>
  );
}

export default App;
