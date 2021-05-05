import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Lunch Appt',
      day: 'Feb 9th 12PM',
      reminder: true,
    },
    {
      id: 2,
      text: 'Dentist Appt',
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

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
