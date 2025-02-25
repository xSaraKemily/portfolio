import { TechnoologiesEnum } from "./technologies.meta";

export enum ProjectsEnum {
    TASK_FLOW = 'TASK_FLOW'
}

export const PROJECTS_META = {
    [ProjectsEnum.TASK_FLOW]: {
        name: 'Task Flow',
        description: "PROJECTS.PROJECT_DESCRIPTIONS.TASK_FLOW",
        stack: [TechnoologiesEnum.ANGULAR, TechnoologiesEnum.DAISYUI, TechnoologiesEnum.TAILWIND, TechnoologiesEnum.TYPESCRIPT, TechnoologiesEnum.HTML, TechnoologiesEnum.CSS],
        imgs: [
          {
            url: 'assets/task-flow-dark.png',
            show: true 
          },
          {
            url: 'assets/task-flow-light.png'
          }
        ],
        link: 'https://xsarakemily.github.io/task-flow/task-flow'
    }
}