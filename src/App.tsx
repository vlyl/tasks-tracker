import './App.css'

import React, { useState } from 'react'

import Header from './components/Header'
//import { DeleteTask } from './components/Task'
import Tasks from './components/Tasks'
import taskList from './db.json'

function App() {
  const [tasks, setTasks] = useState(taskList.tasks)

  return (
    <div className="container">
      <Header title="Tasks Tracker" />
      <Tasks
        tasks={taskList.tasks}
        onDelete={(id: number) => {
          console.log('delete: ', id)
        }}
      />
    </div>
  )
}

export default App
