import { useState } from 'react';

import { ITask } from '../../services/ApiService';
import NewTaskInput from './NewTaskInput/NewTaskInput';
import TasksList from './TasksList/TasksList';
import s from './TasksPage.module.css';

const TasksPage = () => {

  const [tasks, setTasks] = useState<ITask[]>([]);

  const addTask = (newTask: ITask) => {
    setTasks([...tasks, newTask]);
  }

  return (
    <div className={s.box}>
      <NewTaskInput addTask={addTask}/>
      <TasksList tasks={tasks} setTasks={setTasks}/>
    </div>
  )
}

export default TasksPage