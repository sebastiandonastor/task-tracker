import Button from "./Button";

export interface IHeaderProps {
  title: String;
  showAddTask: boolean;
  onToggleAddTask: any;
}
const Header = ({ title, showAddTask, onToggleAddTask }: IHeaderProps) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "green"}
        text={showAddTask ? "Close" : "Add"}
        onClick={onToggleAddTask}
      />
    </header>
  );
};

export default Header;
