import { Route, Routes } from "react-router";
import AdminDashboard from "./components/admin-page/AdminDashboard";
import StudentDashboard from "./components/student-page/StudentDashboard";

function App() {
  return (
    <Routes>
      <Route path="/admin-page" element={<AdminDashboard />} />
      <Route path="/student" element={<StudentDashboard />} />
    </Routes>
  );
}

export default App;
