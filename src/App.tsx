import './App.css'

import React, { useState } from 'react'

import Header from './components/Header'
import TaskList from './components/TaskList'
import taskData from './db.json'

function App() {
  const [tasks, setTasks] = useState(taskData.tasks)

  const deleteTask = (id: number) => {
    console.log('deleting task: ', id)
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id: number) => {
    console.log('reminder:', id)
  }

  return (
    <div className="container">
      <Header title="Tasks Tracker" />
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          onDelete={deleteTask}
          onToggle={toggleReminder}
        />
      ) : (
        ' No Task'
      )}
    </div>
  )
}

export default App
