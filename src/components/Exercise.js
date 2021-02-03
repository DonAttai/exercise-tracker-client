import { Link } from "react-router-dom";

const Exercise = ({ exercise, deleteExercise }) => {
  return (
    <>
      <tr>
        <td>{exercise.username}</td>
        <td>{exercise.description}</td>
        <td>{exercise.duration}</td>
        <td>{exercise.date.substring(0, 10)}</td>
        <td>
          <Link to={`/edit/${exercise._id}`}>
            <button className="btn btn-sm btn-primary mx-1">edit</button>
          </Link>

          <button
            className="btn btn-sm btn-danger mx-1"
            onClick={() => deleteExercise(exercise._id)}
          >
            delete
          </button>
        </td>
      </tr>
    </>
  );
};

export default Exercise;
