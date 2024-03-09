import { Route, Routes } from "react-router";
import AdminDashboard from "./components/admin-page/AdminDashboard";
import StudentDashboard from "./components/student-page/StudentDashboard";
function App() {
  return (
    // <Routes>
    //   <Route link="admin-page " Component={<AdminDashboard />} />
    //   <Route link="/" Component={<AdminDashboard />} />
    // </Routes>
    <StudentDashboard />
  );
}

export default App;
