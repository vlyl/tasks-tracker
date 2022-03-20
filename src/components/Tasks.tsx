import React from 'react'
import tasksList from '../db.json'

type TaskItem = {
  id: number
  text: string
  day: string
  reminder: boolean
}

function Tasks() {
  
  console.log(tasksList.tasks)

  return (
    <div className='task'>
      {tasksList.tasks.map((task) => ( // this is not a arrow function, it's key value map
          <h3>{task.text}</h3>
        ))} 
    </div>
  )
}

export {Tasks}

export default Tasks