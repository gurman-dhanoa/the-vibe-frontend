import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Header from "./components/header/header";
import Home from "./components/home/home";
import Result from "./components/results/Results";
import Instructors from "./components/instuctors/Instructors";
import AdminRegister from "./components/admin/AdminRegister";
import AdminLogin from "./components/admin/AdminLogin";
import AdminStudents from "./components/admin/AdminStudent";
import AdminCreateStudents from "./components/admin/CreateStudent";
function App() {
  return (
      <Router>
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/results" element={<Result />} />
          <Route exact path="/instructors" element={<Instructors />} />
          <Route exact path="/admin/register" element={<AdminRegister />} />
          <Route exact path="/admin/login" element={<AdminLogin />} />
          <Route exact path="/admin/students" element={<AdminStudents />} />
          <Route exact path="/admin/create_student" element={<AdminCreateStudents />} />
        </Routes>
      </Router>
  );
}

export default App;
