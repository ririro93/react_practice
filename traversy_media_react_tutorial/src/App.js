import { useState } from 'react';

import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const App = () => {
  // put in default state inside brackets
  // this was put in App.js not Tasks.js because
  // could be used elsewhere
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30 pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'asdf',
      day: 'Feb 51234th at 2:30 pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'qwerqwerqwer',
      day: 'Feb 55th at 2:30 pm',
      reminder: false,
    },
  ]);
  const [showAddTask, setShowAddTask] = useState(false);
  // something like tasks.push() is bad!! because states are immutable
  // setTasks([...tasks, {something else}]) is good because it creates a new object

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000) + 1;
    const newTask = { id, ...task };

    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? 
      { ...task, reminder: !task.reminder } : 
      task
    ));
  };

  // Toggle Add Task
  const toggleAddTask = (e) => {
    setShowAddTask(!showAddTask);
  }

  return (
    <div className='container'>
      <Header onClick={toggleAddTask}/>
      {showAddTask &&
      <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? 
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> :
      "No Tasks to Show"
      }
    </div>
  )
}

export default App

