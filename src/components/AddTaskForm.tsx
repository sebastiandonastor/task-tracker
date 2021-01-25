import React, { useState } from "react";
import { ITask } from "./Task";

export interface AddTaskProps {
  onAddTask: (task: ITask) => void;
}

const AddTaskForm = ({ onAddTask }: AddTaskProps) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleSubmit = (e: any) => {
    if (!text) {
      alert("Plese enter a task");
      return;
    }

    onAddTask({ text, day, reminder });

    setText("");
    setDay("");
    setReminder(false);
  };
  return (
    <form className="add-form">
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          onChange={(e) => setReminder(e.target.checked)}
        />
      </div>

      <input
        className="btn btn-block"
        type="button"
        value="Save Task"
        onClick={handleSubmit}
      />
    </form>
  );
};

export default AddTaskForm;
