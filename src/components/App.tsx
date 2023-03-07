import { Route, Routes } from "react-router-dom";

import AuthPage from "./AuthPage/AuthPage";
import TasksPage from "./TasksPage/TasksPage";

function App() {
  return (
      <Routes>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/tasks' element={<TasksPage />} />
      </Routes>
  );
}

export default App;
