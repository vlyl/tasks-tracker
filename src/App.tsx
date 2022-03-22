import './App.css'

import React, { useState } from 'react'

import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import taskData from './db.json'

function App() {
  const [tasks, setTasks] = useState(taskData.tasks)

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  const addTask = (task) => {
    console.log(task)
  }

  return (
    <div className='container'>
      <Header title='Tasks Tracker' />
      <AddTask onAdd={addTask} />
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
