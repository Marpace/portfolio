import Home from './pages/Home';
import {Routes, Route, HashRouter} from "react-router-dom"
import ResumePage from './pages/ResumePage';
import ProjectsPage from './pages/ProjectsPage';
import SuccessPage from './pages/SuccessPage';

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/resume" element={<ResumePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/success" element={<SuccessPage/>}/>
      </Routes>
    </HashRouter>
  );
}

export default App;
