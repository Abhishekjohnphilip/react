import LeftSide from "./component/LeftSide"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Otp from "./component/Otp";
import Sucess from "./component/Sucess";
import RightSide from "./component/RightSide";

function App() {
  return (
    <div >
        <Routes>
          <Route path="/" element={<LeftSide />} />
          <Route path="/src/component/Otp.jsx" element={<Otp />} />
          <Route path="/src/component/sucess.jsx" element={<Sucess />} />
        </Routes>
    </div>

  );
}

export default App;

