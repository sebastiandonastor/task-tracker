import React, { useEffect, useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import Header from "./components/Header";
import { ITask } from "./components/Task";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [showAddTask, setAddTask] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedTasks = await fetchTasks();

      setTasks(fetchedTasks);
    };

    fetchData();
  }, []);

  const fetchTasks = async () => {
    try {
      const result = await fetch("http://localhost:5000/tasks");
      const data = await result.json();
      return data as ITask[];
    } catch (e) {
      return [];
    }
  };

  const fetchTask = async (id: string) => {
    const result = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await result.json();
    return data as ITask;
  };

  const handleDelete = async (id: string) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });

      setTasks(tasks.filter((t) => t.id !== id));
    } catch (e) {
      alert("Algo malo ocurrio mientras se borraba");
    }
  };

  const toggleReminder = async (id: string) => {
    const taskToUpdate = await fetchTask(id);
    const updatedTask = { ...taskToUpdate, reminder: !taskToUpdate.reminder };

    const result = await fetch(
      `http://localhost:5000/tasks/${taskToUpdate.id}`,
      {
        method: "PUT",
        body: JSON.stringify(updatedTask),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await result.json();

    setTasks(tasks.map((task) => (task.id === id ? data : task)));
  };

  const handleAddTask = async (task: ITask) => {
    const result = await fetch(`http://localhost:5000/tasks`, {
      method: "POST",
      body: JSON.stringify(task),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const newTask = await result.json();
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Tracker"
        showAddTask={showAddTask}
        onToggleAddTask={() => setAddTask(!showAddTask)}
      />
      {showAddTask && <AddTaskForm onAddTask={handleAddTask} />}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={handleDelete}
          onToggleReminder={toggleReminder}
        />
      ) : (
        <h1>No Data to show</h1>
      )}
    </div>
  );
}

export default App;
