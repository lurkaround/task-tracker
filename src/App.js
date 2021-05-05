import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Lunch Appt.',
      day: 'Feb 9th 12PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Dentist Appt.',
      day: 'Feb 9th 2PM',
      reminder: true,
    },
    {
      id: 3,
      text: 'Flight',
      day: 'Feb 9th 5:45PM',
      reminder: true,
    },
    {
      id: 4,
      text: 'Taxi  Pickup',
      day: 'Feb 9th 9:15PM',
      reminder: false,
    },
  ]);

  // DELETE TASK
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // TOGGLE REMINDER
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className='container'>
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        'No Tasks'
      )}
    </div>
  );
}

export default App;
