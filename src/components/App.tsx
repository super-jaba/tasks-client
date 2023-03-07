import { Route, Routes, useNavigate } from "react-router-dom";
import { UserIdStorage } from "../services/LocalStorageService";
import AccountHeader from "./AccountHeader/AccountHeader";

import AuthPage from "./AuthPage/AuthPage";
import TasksPage from "./TasksPage/TasksPage";

function App() {
  const userId = UserIdStorage.get();

  const navigate = useNavigate();

  if (!userId) {
    navigate('/auth');
  } else {
    console.log(userId);
  }

  return (
      <div>
        <AccountHeader />
        <Routes>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/tasks' element={<TasksPage />} />
      </Routes>
      </div>
  );
}

export default App;
