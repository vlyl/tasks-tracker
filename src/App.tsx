import './App.css'

import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import TaskList from './components/TaskList'
import AddTask from './components/AddTask'
import Footer from './components/Footer'
import About from './components/About'
import { TaskItem } from './components/Task'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const newItems = {} as TaskItem[]
  const [tasks, setTasks] = useState(newItems)

  const SERVER_URL = 'http://localhost:5000/tasks'

  const fetchData = async () => {
    const res = await fetch(SERVER_URL)
    const data = await res.json()
    return data
  }

  const fetchItem = async (id: number) => {
    const res = await fetch(SERVER_URL + `/${id}`)
    const item = await res.json()
    return item
  }

  useEffect(() => {
    const getTasks = async () => {
      const taskData = await fetchData()
      setTasks(taskData)
    }
    getTasks()
  }, [])

  const deleteTask = async (id: number) => {
    const res = await fetch(SERVER_URL + `/${id}`, { method: 'DELETE' })

    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Delete Task')
  }

  const toggleReminder = async (id: number) => {
    const taskToToggle = await fetchItem(id)
    const newItem = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(SERVER_URL + `/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newItem),
    })

    const data = await res.json()

    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
  }

  const addTask = async (task: any) => {
    const res = await fetch(SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()
    console.log(data)

    setTasks([...tasks, data as TaskItem])
  }

  return (
    <Router>
      <div className='container'>
        <Header
          title='Tasks Tracker'
          onAdd={() => {
            setShowAddTask(!showAddTask)
          }}
          showAdd={!showAddTask}
        />
        <Routes>
          <Route
            path='/'
            element={
              <>
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
              </>
            }
          />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
