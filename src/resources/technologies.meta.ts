export enum TechnoologiesEnum {
    ANGULAR = 'ANGULAR',
    TAILWIND = 'TAILWIND',
    PHP = 'PHP',
    LARAVEL = 'LARAVEL',
    HTML = 'HTML',
    CSS = 'CSS',
    TYPESCRIPT = 'TYPESCRIPT',
    JAVASCRIPT = 'JAVASCRIPT',
    DAISYUI = 'DAISYUI',

    BOOTSTRAP = 'BOOTSTRAP',
    MYSQL = 'MYSQL',
    RABBITMQ = 'RABBITMQ',
    JQUERY = 'JQUERY',
    DOCKER = 'DOCKER'
}

export const TECHNOLOGIES_META = {
    [TechnoologiesEnum.LARAVEL]: {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
        name: 'Laravel'
    },
    [TechnoologiesEnum.PHP]: {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
        name: 'PHP'
    },
    [TechnoologiesEnum.ANGULAR]: {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angular/angular-original.svg',
        name: 'Angular'
    },
    [TechnoologiesEnum.TAILWIND]: {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
        name: 'TailwindCSS'
    },
    [TechnoologiesEnum.TYPESCRIPT]: {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg',
        name: 'TypeScript'
    },
    [TechnoologiesEnum.JAVASCRIPT]: {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
        name: 'JavaScript'
    },
    [TechnoologiesEnum.DAISYUI]: {
        icon: 'assets/daisyui-logomark.svg',
        name: 'DaisyUI'
    },
    [TechnoologiesEnum.HTML]: {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg',
        name: 'HTML'
    },
    [TechnoologiesEnum.CSS]: {
        icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
        name: 'CSS'
    },
    [TechnoologiesEnum.BOOTSTRAP]: {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
        name: 'Bootstrap'
    },
    [TechnoologiesEnum.MYSQL]: {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
        name: 'MySQL'
    },
    [TechnoologiesEnum.RABBITMQ]: {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rabbitmq/rabbitmq-original.svg',
        name: 'RabbitMQ'
    },
    [TechnoologiesEnum.JQUERY]: {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg',
        name: 'JQuery'
    },
    [TechnoologiesEnum.DOCKER]: {
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg',
        name: 'Docker'
    },
}

export const MAIN_TECHNOLOGIES_META = [
    TechnoologiesEnum.LARAVEL,
    TechnoologiesEnum.PHP,
    TechnoologiesEnum.ANGULAR,
    TechnoologiesEnum.TAILWIND,
    TechnoologiesEnum.TYPESCRIPT,
    TechnoologiesEnum.JAVASCRIPT,
    TechnoologiesEnum.DAISYUI,
    TechnoologiesEnum.HTML,
    TechnoologiesEnum.CSS
]