import React from 'react'

import Task, { DeleteTask, TaskItem } from './Task'

function Tasks(param: { tasks: TaskItem[]; onDelete: DeleteTask }) {
  return (
    <div className="task">
      {param.tasks.map(
        (
          task // this is not a arrow function, it's key value map
        ) => (
          <Task key={task.id} task={task} onDelete={param.onDelete} />
        )
      )}
    </div>
  )
}

export default Tasks
