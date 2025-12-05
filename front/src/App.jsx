import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Films from "./pages/Portfolio/Films";
import Branding from "./pages/Portfolio/Branding";
import ModelShoot from "./pages/Portfolio/ModelShoot";
import SoundDesign from "./pages/Portfolio/SoundDesign";
import Adshoot from "./pages/Portfolio/Adshoot";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main" element={<MainPage/>} />
        <Route path="/Portfolio/Films" element={<Films/>} />
        <Route path="/Portfolio/Branding" element={<Branding/>} />
        <Route path="/Portfolio/ModelShoot" element={<ModelShoot/>} />
        <Route path="/Portfolio/SoundDesign" element={<SoundDesign/>} />
        <Route path="/Portfolio/Adshoot" element={<Adshoot/>} />

      </Routes>
    </Router>
  );
}

export default App;
