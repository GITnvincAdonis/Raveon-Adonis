import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./Components/HomePage";
import ProjectPage from "./Components/ProjectPage";
import { AnimatePresence } from "framer-motion";
import UnityGameProject from "./Components/UnityGameProject";
import HeadphoneRender from "./Components/HeadphoneRender";
import ControllerRender from "./Components/ControllerRender";
import Slavegame from "./Components/SlaveGame";
import WaterProject from "./Components/WaterProject";
function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/content" element={<ProjectPage />}></Route>
          <Route path="/1" element={<UnityGameProject></UnityGameProject>} />
          <Route path="/2" element={<HeadphoneRender></HeadphoneRender>} />
          <Route path="/3" element={<ControllerRender></ControllerRender>} />
          <Route path="/4" element={<Slavegame></Slavegame>} />
          <Route path="/5" element={<WaterProject />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
