import { createContext, useContext } from 'react';

export const ProjectContext = createContext();

export default function useProjectContext() {
  return useContext(ProjectContext);
}
