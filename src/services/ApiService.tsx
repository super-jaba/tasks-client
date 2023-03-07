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

class AppApi {
    
    async registerUser(username: string) {
        const response = await axiosInstance.post<IUserReponse>('/users', {username});
        this.setUserData(response.data);
    }

    async loginUser(username: string) {
        const response = await axiosInstance.get<IUserReponse>('/users' + username);
        this.setUserData(response.data);
    }

    setUserData(responseData: IUserReponse) {
        UserIdStorage.set(responseData._id);
        UsernameStorage.set(responseData.username);
    }

    async createTask(title: string, owner: string) {
        const response = await axiosInstance.post('/tasks/', {title, owner});
    }
}

export default new AppApi();