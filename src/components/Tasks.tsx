import Task, { ITask } from "./Task";

export interface TasksProps {
  tasks: ITask[];
  onDelete: any;
  onToggleReminder: any;
}

const Tasks = ({ tasks, onDelete, onToggleReminder }: TasksProps) => {
  return (
    <>
      {tasks.map((t) => (
        <Task
          task={t}
          onDelete={onDelete}
          key={t.id}
          onToggleReminder={onToggleReminder}
        />
      ))}
    </>
  );
};

export default Tasks;
