import axios from "axios";
import { UserIdStorage, UsernameStorage } from "./LocalStorageService";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000'
});

interface IUserReponse {
    _id: string;
    username: string;
    _v: number;
}

export interface ITask {
    _id: string;
    title: string; 
    isCompleted: boolean;
    owner: string
  }

class AppApi {
    
    async registerUser(username: string) {
        const response = await axiosInstance.post<IUserReponse>('/users/', {username});
        this.setUserData(response.data);
    }

    async loginUser(username: string) {
        const response = await axiosInstance.get<IUserReponse>('/users/' + username);
        this.setUserData(response.data);
    }

    setUserData(responseData: IUserReponse) {
        UserIdStorage.set(responseData._id);
        UsernameStorage.set(responseData.username);
    }

    async createTask(title: string, owner: string): Promise<ITask> {
        const response = await axiosInstance.post('/tasks/', {title, owner});
        return response.data;
    }

    async getTask(id: string): Promise<ITask> {
        return (await axiosInstance.get('/tasks/' + id)).data;
    }

    async fetchTasks(owner: string, skip: number | null = null, limit: number | null = null): Promise<ITask[]> {    
        let params: any = {owner};
        if (skip) params.skip = skip;
        if (limit) params.limit = limit
        const response = await axiosInstance.get<ITask[]>('/tasks/', {params});
        return response.data;
    }

    async deleteTask(_id: string): Promise<boolean> {
        const response = await axiosInstance.delete('/tasks/' + _id);
        return response.status < 400;
    }

    async updateTask(_id: string, title: string, isCompleted: boolean) {
        await axiosInstance.put('/tasks/' + _id, {_id, title, isCompleted});
    }
}

export default new AppApi();