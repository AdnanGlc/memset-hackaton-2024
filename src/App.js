import { Route, Routes } from "react-router";
import AdminDashboard from "./components/admin-page/AdminDashboard";
import StudentDashboard from "./components/student-page/StudentDashboard";
import Login from './components/Login'
import Dashboard from "./components/Dashboard/Dashboard";
import Learning from "./components/Learning/Learning";
function App() {
  return (
    <Routes>
      <Route path="/admin-dashboard" element={<AdminDashboard />} />
      <Route path="/" element={<Login />} />
      <Route path="/tasks" element={  <StudentDashboard />} />
      <Route path="/exam" element={  <StudentDashboard />} />

      <Route path="/dashboard" element={  <Dashboard/>} />
      <Route path="/learning" element={  <Learning />} />

    </Routes>

  );
}

export default App;
