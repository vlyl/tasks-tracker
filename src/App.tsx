import './App.css'

import React, { useState, useEffect } from 'react'

import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import { TaskItem } from './components/Task'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const newItems = {} as TaskItem[]
  const [tasks, setTasks] = useState(newItems)

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  useEffect(() => {
    const getTasks = async () => {
      const taskData = await fetchData()
      setTasks(taskData)
    }
    getTasks()
  }, [])

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

  const addTask = (task: any) => {
    const id = Math.floor(Math.random() * 10000 + 1)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className='container'>
      <Header
        title='Tasks Tracker'
        onAdd={() => {
          setShowAddTask(!showAddTask)
        }}
        showAdd={!showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
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
