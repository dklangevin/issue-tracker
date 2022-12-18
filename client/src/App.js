import { createContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Backlog from './components/Backlog/Backlog';
import CreateProject from './components/CreateProject/CreateProject';
import Layout from './layout/Layout';

export const ProjectContext = createContext();

function App() {
  return (
    <div className="App">
      {/* <Backlog /> */}
      {/* <DragAndDrop /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<CreateProject />} />
          </Route>
          <Route path="/issues" element={<Layout />}>
            <Route index element={<CreateProject />} />
          </Route>
          <Route path="/backlog" element={<Layout />}>
            <Route index element={<Backlog />} />
          </Route>
          <Route path="/categories" element={<Layout />}>
            <Route index element={<CreateProject />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
