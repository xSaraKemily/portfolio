import { TechnoologiesEnum } from "./technologies.meta";

export enum ProjectsEnum {
    TASK_FLOW = 'TASK_FLOW',
    DOC_STORE = 'DOC_STORE'
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
    },
    [ProjectsEnum.DOC_STORE]: {
      name: 'Task Flow',
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
}