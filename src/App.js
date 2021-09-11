import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "06-09-2021, 1:09:00 pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "01-11-2021, 8:07:43 am",
      reminder: false,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "04-10-2021, 7:39:30 am",
      reminder: true,
    }, 
    {
      id: 4,
      text: "Feed Kitty",
      day: "11-09-2021, 2:05:00 pm",
      reminder: false,
    },
  ])

// Add Task
const addTask = (task) => {
 const id = Math.floor(Math.random() * 10000) + 1

 const newTask = { id, ...task }
 setTasks([ ...tasks, newTask ])
}

// Delete Task
const deleteTask = (id) => {
  setTasks (tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks (tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
}

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      { showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No task available to show'}
    </div>
  )
}

export default App
// 1:12:46