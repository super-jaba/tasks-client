import NewTaskInput from './NewTaskInput/NewTaskInput';
import s from './TasksPage.module.css';

const TasksPage = () => {
  return (
    <div className={s.box}>
      <NewTaskInput />
    </div>
  )
}

export default TasksPage