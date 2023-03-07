import { useState, useEffect, FC } from "react"

import ApiService, { ITask } from "../../../services/ApiService";
import { UserIdStorage } from "../../../services/LocalStorageService";
import TaskCard from "./TaskCard/TaskCard";

interface ITasksList {
  tasks: ITask[]
  setTasks: (newValues: ITask[]) => void;
}

const TasksList: FC<ITasksList> = (props) => {

  

  const ownerId = UserIdStorage.get();

  const deleteTask = (id: string) => {
    props.setTasks(props.tasks.filter((task) => task._id !== id));
  }

  const fetchTasks = async () => {
    if (ownerId) {
      props.setTasks(await ApiService.fetchTasks(ownerId));
    };
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  useEffect(() => {
    console.log(props.tasks);
  }, [props.tasks]);
    
  return (
    <div>
      {props.tasks.map((task) => <TaskCard task={task} deleteHandler={deleteTask} key={task._id}/>)}
    </div>
  )
}

export default TasksList;