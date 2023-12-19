import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ForgotPass from "./Pages/ForgotPass";
import SignUp from "./components/Authentication/SignUp";
// import ChatPage from "./Pages/ChatPage";
// import Login from './components/Authentication/login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/forgot-pass" element={<ForgotPass />} exact />
        <Route path="/signup" element={<SignUp />} exact />
      </Routes>
    </div>
  );
}

export default App;
