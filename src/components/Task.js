import { FaTimes } from "react-icons/fa";
import moment from "moment";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : "task"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </h3>
      <p>{moment(task.day).format("MMM Do YYYY, h:mm:ss a")}</p>
    </div>
  );
};

export default Task;
