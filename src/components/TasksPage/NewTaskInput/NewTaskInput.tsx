import { useState } from "react"

import ApiService from "../../../services/ApiService";
import { UserIdStorage } from "../../../services/LocalStorageService";
import Button from "../../ui/Button/Button";
import InputText from "../../ui/InputText/InputText"

import s from "./NewTaskInput.module.css";

const NewTaskInput = () => {
  const [title, setTitle] = useState('');

  const taskIsValid = (): boolean => {
    return title !== '';
  }

  const clearInput = () => {
    setTitle('');
  }

  const createNewTask = () => {
    const taskOwner = UserIdStorage.get();
    if (!(taskIsValid() && taskOwner)) {
      return;
    }
    ApiService.createTask(title, taskOwner);

    clearInput();
    // TODO: Add task to the list
  }

  return (
    <div className={s.box}>
      <InputText placeholder='New Task' value={title} onChange={(e) => setTitle(e.target.value)}/>
      <Button backgroundColor='#0be881' onClick={createNewTask}>Add</Button>
    </div>
  )
}

export default NewTaskInput;