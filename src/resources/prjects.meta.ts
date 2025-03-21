import { ProjectsEnum } from "./project.enum";
import { TechnoologiesEnum } from "./technologies.meta";

export const PROJECTS_META = {
  [ProjectsEnum.POMODAILY]: {
    name: 'PomoDaily',
    description: "PROJECTS.PROJECT_DESCRIPTIONS.POMODAILY",
    stack: [TechnoologiesEnum.ANGULAR, TechnoologiesEnum.TAILWIND, TechnoologiesEnum.TYPESCRIPT, TechnoologiesEnum.DAISYUI, TechnoologiesEnum.HTML, TechnoologiesEnum.CSS],
    imgs: [
      {
        url: 'assets/pomodaily/pomodaily-1.png',
        show: true
      },
      {
        url: 'assets/pomodaily/pomodaily-2.png'
      },
      {
        url: 'assets/pomodaily/pomodaily-3.png'
      }
    ],
    link: 'https://pomodaily-4zmugfng6-sara-kemily-flores-venturas-projects.vercel.app/',
  },
  [ProjectsEnum.DOC_STORE]: {
    name: 'Doc Store',
    description: "PROJECTS.PROJECT_DESCRIPTIONS.DOC_STORE",
    stack: [TechnoologiesEnum.LARAVEL,TechnoologiesEnum.PHP, TechnoologiesEnum.DOCKER, TechnoologiesEnum.MYSQL, TechnoologiesEnum.RABBITMQ, TechnoologiesEnum.JQUERY, TechnoologiesEnum.BOOTSTRAP, TechnoologiesEnum.JAVASCRIPT, TechnoologiesEnum.HTML, TechnoologiesEnum.CSS],
    imgs: [
      {
        url: 'assets/docstore1.png',
      },
      {
        url: 'assets/docstore2.png',
        show: true
      },
      {
        url: 'assets/docstore3.png',
      }
    ],
    link: null,
    github_link: 'https://github.com/xSaraKemily/doc-store?tab=readme-ov-file#-file-storage-app'
  },
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
  },
}