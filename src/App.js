import logo from "./logo.svg";
import "./App.css";
import Projects from "./Projects";

function App() {
  return (
    <div>
      Projects
      <Projects projectName="Project Name 1" projectId="project1"></Projects>
      <Projects projectName="Project Name 2" projectId="project1"></Projects>
      <Projects projectName="Project Name 3" projectId="project1"></Projects>
    </div>
  );
}

export default App;
