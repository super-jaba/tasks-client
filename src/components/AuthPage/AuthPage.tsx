import { useState } from 'react';

import Button from '../ui/Button/Button';
import s from './AuthPage.module.css';
import apiService from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';
import InputText from '../ui/InputText/InputText';

const AuthPage = () => {
  const [username, setUsername] = useState('');

  const tasksUrl = '/tasks';

  const navigate = useNavigate();

  const registerHandler = async () => {
    if (username !== '') {
      await apiService.registerUser(username);
      navigate(tasksUrl);
    }
  }

  const loginHandler = async () => {
    if (username !== '') {
      await apiService.loginUser(username);
      navigate(tasksUrl);
    }
  }

  return (
    <div className={s.box}>
        <div className={s.form}>
            <h3 className={s.title}>Enter your name</h3>
            <InputText placeholder='Name' value={username} onChange={(e) => setUsername(e.target.value)}/>
            <div className={s.buttonsRow}>
                <Button backgroundColor='#0be881' width='49%' onClick={loginHandler}>Login</Button>
                <Button backgroundColor='#4bcffa' width='49%' onClick={registerHandler}>Register</Button>
            </div>
        </div>
    </div>
  );
}

export default AuthPage