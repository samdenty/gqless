import { findTSconfig } from './findTSconfig'
import { Project } from 'ts-morph'

const projects = new Map<string, Project>()

export const getTSProject = (dir: string) => {
  const configPath = findTSconfig(dir)
  if (!configPath) return

  if (projects.has(configPath)) {
    return projects.get(configPath)
  }

  const project = new Project({
    tsConfigFilePath: configPath,
  })
  projects.set(configPath, project)
  return project
}
