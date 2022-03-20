import React from 'react'
import { FaTimes } from 'react-icons/fa'

type TaskItem = {
  id: number
  text: string
  day: string
  reminder: boolean
}

type DeleteTask = (id: number) => void

function Task(param: { task: TaskItem; onDelete: DeleteTask }) {
  return (
    <div className="task">
      <h3>
        {param.task.text}
        <FaTimes style={{ color: 'red', cursor: 'pointer' }} />
      </h3>
      <p>{param.task.day}</p>
    </div>
  )
}

export type { DeleteTask, TaskItem }

export default Task
