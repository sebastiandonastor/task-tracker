import { FaTimes } from "react-icons/fa";

export interface ITask {
  id?: string;
  text: String;
  day: String;
  reminder: boolean;
}

export interface TaskProps {
  task: ITask;
  onDelete: any;
  onToggleReminder: any;
}

const Task = ({ task, onDelete, onToggleReminder }: TaskProps) => {
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggleReminder(task.id)}
    >
      <h3 key={task.id}>
        {task.text}{" "}
        <FaTimes
          onClick={() => onDelete(task.id)}
          style={{ color: "red", cursor: "pointer" }}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
