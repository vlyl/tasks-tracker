import './App.css'

import React, { useState } from 'react'

import Header from './components/Header'
import { DeleteTask } from './components/Task'
import Tasks from './components/Tasks'
import taskList from './db.json'

function App() {
  const [tasks, setTasks] = useState(taskList.tasks)

  const deleteTask: DeleteTask = (id: number) => {
    console.log('delete: ', id)
  }

  return (
    <div className="container">
      <Header title="Tasks Tracker" />
      <Tasks tasks={taskList.tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App
