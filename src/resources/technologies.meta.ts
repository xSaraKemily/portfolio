export enum TechnoologiesEnum {
    ANGULAR = 'ANGULAR',
    TAILWIND = 'TAILWIND',
    PHP = 'PHP',
    LARAVEL = 'LARAVEL',
    HTML = 'HTML',
    CSS = 'CSS',
    TYPESCRIPT = 'TYPESCRIPT',
    JAVASCRIPT = 'JAVASCRIPT',
    DAISYUI = 'DAISYUI'
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
    }
}