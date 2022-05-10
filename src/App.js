import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors ",
      day: 1,
      reminder: false,
    },
    {
      id: 2,
      text: "Players ",
      day: 2,
      reminder: false,
    },
  ]);

  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    console.log(id);
  };

  return (
    <div className="container">
      <Header
        showAdd={showAddTask}
        onAdd={() => setShowAddTask(!showAddTask)}
        title="Task Tracker"
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "no tasks to show"
      )}{" "}
    </div>
  );
};

export default App;
