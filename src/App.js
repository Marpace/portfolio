import Home from './Home';
import {Routes, Route, HashRouter} from "react-router-dom"
import ResumePage from './ResumePage';
import ProjectsPage from './ProjectsPage';
import SuccessPage from './SuccessPage';

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
