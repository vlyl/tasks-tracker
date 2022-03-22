import React from 'react'

import Task, { DeleteTask, ToggleReminder, TaskItem } from './Task'

function TaskList(param: {
  tasks: TaskItem[]
  onDelete: DeleteTask
  onToggle: ToggleReminder
}) {
  return (
    <div className='task'>
      {param.tasks.map(
        (
          task // this is not a arrow function, it's key value map
        ) => (
          <Task
            key={task.id}
            task={task}
            onDelete={param.onDelete}
            onToggle={param.onToggle}
          />
        )
      )}
    </div>
  )
}

export default TaskList
