import './App.css'

import React, { useState } from 'react'

import Header from './components/Header'
import Tasks from './components/Tasks'
import taskData from './db.json'

function App() {
  const [tasks, setTasks] = useState(taskData.tasks)

  const deleteTask = (id: number) => {
    console.log('deleting task: ', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header title="Tasks Tracker" />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App
