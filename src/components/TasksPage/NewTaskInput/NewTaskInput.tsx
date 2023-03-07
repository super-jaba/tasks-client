import { FC, useState } from "react"

import ApiService, { ITask } from "../../../services/ApiService";
import { UserIdStorage } from "../../../services/LocalStorageService";
import Button from "../../ui/Button/Button";
import InputText from "../../ui/InputText/InputText"

import s from "./NewTaskInput.module.css";

interface INewTaskInput {
  addTask: (task: ITask) => void; 
}

const NewTaskInput: FC<INewTaskInput> = (props) => {
  const [title, setTitle] = useState('');

  const taskIsValid = (): boolean => {
    return title !== '';
  }

  const clearInput = () => {
    setTitle('');
  }

  const createNewTask = async () => {
    const taskOwner = UserIdStorage.get();
    if (!(taskIsValid() && taskOwner)) {
      return;
    }
    const task = await ApiService.createTask(title, taskOwner);

    clearInput();
    
    props.addTask(task);
  }

  return (
    <div className={s.box}>
      <InputText placeholder='New Task' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <Button backgroundColor='#0be881' onClick={createNewTask}>Add</Button>
    </div>
  )
}

export default NewTaskInput;