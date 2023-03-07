import { FC, useState } from "react";

import s from './TaskCard.module.css';
import ApiService, { ITask } from "../../../../services/ApiService";
import Button from "../../../ui/Button/Button";
import InputText from "../../../ui/InputText/InputText";

interface ITaskCard {
  task: ITask
  deleteHandler: (id: string) => void;
}

const TaskCard: FC<ITaskCard> = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(props.task.title);
  const [isCompleted, setIsCompleted] = useState(props.task.isCompleted);

  const deleteTask = async () => {
    if (await ApiService.deleteTask(props.task._id)) {
      props.deleteHandler(props.task._id);
    }
  }

  const updateTask = async () => {
    console.log(`isCompleted is ${isCompleted}`);
    await ApiService.updateTask(props.task._id, title, isCompleted);
    setEditMode(false);
  }

  return (
    <div className={s.box}>
      {editMode ? <InputText placeholder='New task title' value={title} onChange={(e) => setTitle(e.target.value)}/>
      : <h4 style={{color: isCompleted ? 'gray' : 'black'}} onClick={() => setEditMode(true)}>{title}</h4>}
      {editMode ? <Button textColor="white" backgroundColor="orange" onClick={updateTask} width='100px'>Save</Button>
      : <div>
        <input type="checkbox" checked={isCompleted}  onInput={updateTask} onChange={() => setIsCompleted(!isCompleted)}/>
        <Button textColor="white" backgroundColor="red" onClick={deleteTask} width='100px'>Delete</Button>
      </div>}
    </div>
  )
}

export default TaskCard