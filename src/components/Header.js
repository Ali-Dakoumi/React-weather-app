import Button from "./Button";
import Tasks from "./Tasks";
const Header = ({ title, onAdd, showAdd }) => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    <header className="header">
      <h1> {title} </h1>
      <Button
        onClick={onAdd}
        color={showAdd ? "red" : "green"}
        text={showAdd ? "close" : "add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
