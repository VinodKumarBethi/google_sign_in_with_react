import { Navigate, Route, Routes } from "react-router-dom";
import './css/App.css';
import Profile from './Components/Profile';
import {ClientId} from './Constants/Constatnt'
import MyGoogle from "./Components/MyGoogle";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/login" element={<MyGoogle ClientId={ClientId} redirect="/profile" briefConsoleLog localStorage/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;
