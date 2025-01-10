import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";
import RegisterForm from "./components/register-form";
import RoleBaseRouting from "./Auth/RoleBaseRoute";

const App = () => {
  return (
    <>
      <Router basename="/login-system">
        <Routes>
          <Route path="/dashboard" element={<RoleBaseRouting />} />

          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
