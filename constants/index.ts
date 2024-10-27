import { FlBrainCircuit, CoEducation, LiDiamond,
    CoBrandTelegramPlane,
    CoBrandFacebookF,
    CoBrandInstagram,
    CoBrandGithub,
    CoBrandLinkedinIn,
} from '@kalimahapps/vue-icons'

export const skills = [
    {
        title: "Фронт энд",
        programs: [
            { title: 'Sass', icon: '/devsvg/sass-1.svg' },
            { title: 'Tailwind', icon: '/devsvg/tailwindcss.svg' },
            { title: 'Javascript', icon: '/devsvg/javascript.svg' },
            { title: 'Typescript', icon: '/devsvg/typescript.svg' },
            { title: 'Vue.js', icon: '/devsvg/vuejs.svg' },
            { title: 'Nuxt.js', icon: '/devsvg/nuxt-3.svg' },
            { title: 'Vuetify', icon: '/devsvg/v-logo.svg' },
            { title: 'Figma', icon: '/devsvg/figma.svg' },
        ]
    },
    {
        title: "Бек энд",
        programs: [
            { title: 'Node.js', icon: '/devsvg/nodejs-icon.svg' },
            { title: 'Express.js', icon: '/devsvg/express.svg' },
            { title: 'Nest.js', icon: '/devsvg/nestjs.svg' },
            { title: 'Socket.io', icon: '/devsvg/socket-io.svg' },
            { title: 'Mongodb', icon: '/devsvg/mongodb-icon-1.svg' },
            { title: 'Postgresql', icon: '/devsvg/postgresql.svg' },
            { title: 'Prisma', icon: '/devsvg/file-icons--prisma.svg' },
            { title: 'Redis', icon: '/devsvg/devicon--redis.svg' },
        ]
    },
    {
        title: "Другие",
        programs: [
            { title: 'Git', icon: '/devsvg/git-icon.svg' },
            { title: 'Docker', icon: '/devsvg/docker-4.svg' },
            { title: 'Nginx', icon: '/devsvg/nginx.svg' },
            { title: 'Graphql', icon: '/devsvg/graphql-icon.svg' },
            { title: 'Electron.js', icon: '/devsvg/electron-icon.svg' },
            { title: 'Tauri', icon: '/devsvg/tauri-1.svg' },
            { title: 'RabbitMQ', icon: '/devsvg/rabbitmq-logo-svgrepo-com.svg' },
            { title: 'gRPC', icon: '/devsvg/logos--grpc-1.svg' },
        ]
    },
]

export const projects = [
    {
        title: 'Игра сортировка цветов',
        url: 'https://color-sorting-by-nurbek12.netlify.app/',
        github: 'https://github.com/Nurbek12/color-sorted',
        langs: ['Vue'],
        imageFolder: 'csort',
        images: [1],
    },
    {
        title: 'Plants vs Zombie clone',
        url: 'https://optimistic-hoover-80fc7d.netlify.app/',
        github: 'https://github.com/Nurbek12/plants_vs_zombies_2',
        langs: ['Javascript'],
        imageFolder: 'pvz',
        images: [1],
    },
    {
        title: 'Игра судоку',
        url: 'https://sudoku-by-nurbek12.netlify.app/',
        github: 'https://github.com/Nurbek12/mini-projects/tree/main/sudoku',
        langs: ['Vue'],
        imageFolder: 'sudoku',
        images: [1],
    },
    {
        title: 'Игра шашки',
        url: 'https://vue-checkers-n12.onrender.com/',
        github: 'https://github.com/Nurbek12/vue-tsc-checkers',
        langs: ['Vue','Express','Socket'],
        imageFolder: 'checkers',
        images: [1,2],
    },
    {
        title: 'Регистрация и обработка данных населении',
        url: '',
        github: '',
        langs: ['Vue', 'Vuetify', 'Express', 'Mongodb'],
        imageFolder: 'rqm',
        images: [1,2,3,4],
    },
    {
        title: 'Система управления отелем',
        url: 'https://hms-nurbek12.onrender.com',
        github: 'https://github.com/Nurbek12/hotel-management',
        langs: ['Vue','Vuetify','Express', 'Postgresql'],
        imageFolder: 'hotel',
        images: [1, 2, 3, 4, 5, 6],
    },
    {
        title: 'Фронт енд сайта для Медицинское Оборудование Кешмед',
        url: 'https://keshmed.uz',
        github: '',
        langs: ['Vue','Vuetify','Nuxt','Django','Postgresql'],
        imageFolder: 'keshmed',
        images: [1, 2, 3, 4],
    },
    {
        title: 'СРМ платформа для сайта Родной Климата',
        url: 'https://crm-rk.onrender.com',
        github: '',
        langs: ['Tailwind', 'Vue', 'Express', 'Postgresql'],
        imageFolder: 'crm-rk',
        images: [2,1,3,4,5,6,7,8],
    },
    {
        title: 'Электон склад - десктоп программа для магазин электротехники',
        url: '',
        github: '',
        langs: ['Tailwind', 'Vue', 'Electron', 'Mongodb'],
        imageFolder: 'warehouse',
        images: [1,2,3],
    },
    {
        title: 'POS-система для автоматизации кухни Fish & Chicken (Шахрисабз)',
        url: '',
        github: '',
        langs: ['Vue', 'Vuetify', 'Express', 'Socket'],
        imageFolder: 'pos',
        images: [2,1,3,4,5,6,7],
    },
    {
        title: 'Фронт энд сайта для Dental Implantology Center',
        url: 'https://dr-ikramov.uz',
        github: '',
        langs: ['Tailwind','Vue','Nuxt','Nest','Postgresql'],
        imageFolder: 'dr-ikramov',
        images: [1, 2, 3],
    },
    {
        title: 'Телеграм Веб приложения для магазина',
        url: 'https://n12-shopping-wapp.onrender.com',
        github: 'https://github.com/Nurbek12/shop-tg-wapp',
        langs: ['Tailwind', 'Vue', 'Vue-tg', 'Express', 'Postgresql', 'Grammy'],
        imageFolder: 'twa',
        images: [13, 1,2,3,4,5,6,7,8,9,10,11,12],
    },
    {
        title: 'Здес можно было ваша проект)',
        url: '',
        github: '',
        langs: ['на все'],
        imageFolder: 'none',
        images: [1],
    },
]

export const aboutCards = [
    {
        icon: FlBrainCircuit,
        title: 'Опыт и навыки',
        description: 'Я веб-разработчик с более чем 5 лет опыта в создании высокопроизводительных и масштабируемых веб-приложений. Мои навыки включают в себя: Фронтенд и Бэкенд разработку, UI/UX дизайн, Разработка Telegram ботов, SEO оптимизация, Контейнеризация и оркестрация, Юнит Тестирование, Разработка десктопных приложений и т.д. А также знаю Solid, KISS, DRY, FSD'
    },
    {
        icon: CoEducation,
        title: 'Образование и сертификаты',
        description: 'Я окончил Ташкентский информационный технологический университет Самаркандский филиал по специальности Программный инжинеринг. Помимо формального образования, я постоянно повышаю свою квалификацию, проходя различные хакатоны и получая сертификаты. Среди хакатоны я участвовал — President Tech Awards, Tech Genius, Hacknovation, United Clean Coders и другие.'
    },
    {
        icon: LiDiamond,
        title: 'Цели и стремления',
        description: 'Моя основная цель — создавать высококачественные и эффективные веб-приложения, которые улучшают жизнь пользователей. Я стремлюсь к постоянному профессиональному росту и развитию, участвуя в интересных проектах и сотрудничая с талантливыми командами.'
    },
]

export const socialLinks = [
    { icon: CoBrandTelegramPlane, title: 'Telegram', name: "t.me/nurbek_xd", url: 'https://t.me/nurbek_xd' },
    { icon: CoBrandFacebookF, title: 'Facebook', name: "facebook/Nurbek", url: 'https://www.facebook.com/profile.php?id=100073779323449' },
    { icon: CoBrandInstagram, title: 'Instagram', name: "instagram/nurbek_developer_", url: 'https://www.instagram.com/nurbek_developer_/' },
    { icon: CoBrandGithub, title: 'Github', name: "github/Nurbek12", url: 'https://github.com/Nurbek12' },
    { icon: CoBrandLinkedinIn, title: 'Linkedin', name: "linkedin/nurbek-rustamov-7111a6224", url: 'https://www.linkedin.com/in/nurbek-rustamov-7111a6224' },
]