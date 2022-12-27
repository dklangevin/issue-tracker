import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Backlog from './routes/Backlog/Backlog';
import CreateProject from './routes/CreateProject/CreateProject';
import Project from './routes/Project/Project';
import Layout from './layout/Layout';
import Issues from './routes/Issues/Issues';
import Profile from './routes/Profile/Profile';
import Issue from './routes/Issue/Issue';

export const ProjectContext = createContext();

function App() {
  return (
    <div className="App">
      {/* <Backlog /> */}
      {/* <DragAndDrop /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Project />} />
          </Route>
          <Route path="/project" element={<Layout />}>
            <Route index element={<Project />} />
            <Route path="create" element={<CreateProject />} />
          </Route>
          <Route path="/issues" element={<Layout />}>
            <Route index element={<Issues />} />
          </Route>
          <Route path="/backlog" element={<Layout />}>
            <Route index element={<Backlog />} />
          </Route>
          <Route path="/categories" element={<Layout />}>
            <Route index element={<CreateProject />} />
          </Route>
          <Route path="/profile" element={<Layout />}>
            <Route index element={<Profile />} />
          </Route>
          <Route path="/issue/:id" element={<Layout />}>
            <Route index element={<Issue />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
