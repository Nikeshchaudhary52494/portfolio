import byte from "../assets/byte.png"
// import snakegame from "../assets/snakegame.png"
// import oldportfolio from "../assets/oldportfolio.png"
// import taskmanagement from "../assets/taskmanagement.jpg"
import foodapp from "../assets/foodapp.png"
// import fetchme from "../assets/fetchme.png"
import netflix from "../assets/netflix.png"
import buzzHive from "../assets/buzzHive.png"
import spotify from "../assets/spotify.png"

export const projectCard = [
    {
        id: 1,
        color: "bg-cyan-500",
        title: 'Byte Ecommerce',
        techStack: 'React, Express, MongoDb, Tailwind CSS, Redux Toolkit',
        imageUrl: byte,
        href: 'https://byte-ecommerce.vercel.app/',
    },
    {
        id: 2,
        color: "bg-green-500",
        title: 'Spotify-clone',
        techStack: 'Nextjs 14, React Hook Form, Tailwind CSS, Supabase, Zustand, Radix Ui, Typescript',
        imageUrl: spotify,
        href: 'https://spotifyclone-next.vercel.app/',
    },
    {
        id: 3,
        color: "bg-slate-500",
        title: 'Buzz Hive',
        techStack:
            'React, Node, Express, Tailwind CSS, Socket.io, MongoDb, Daisy Ui',
        imageUrl: buzzHive,
        href: 'https://buzz-hive-one.vercel.app/',
    },
    {
        id: 4,
        color: "bg-red-700",
        title: 'Netflix-clone',
        techStack: 'Nextjs 14,Tailwind css, Prisma, Supabase',
        imageUrl: netflix,
        href: 'https://netflixclone-next.vercel.app/',
    },
    {
        id: 5,
        color: "bg-blue-500",
        title: 'Flutter Food App',
        techStack: 'Flutter, Dart',
        imageUrl: foodapp,
        href: 'https://github.com/Nikeshchaudhary52494/flutterFoodApp.git',
    },
];

export const ExtraProjectsData = [
    {
        id: 1,
        color: "bg-pink-500",
        title: 'Old Portfolio',
        techStack: 'Javascript, Html, Tailwind css',
        href: 'https://nikeshportfolio52494.web.app',
    },
    {
        id: 2,
        color: "bg-green-500",
        title: 'Snake Game',
        techStack:
            'Tailwind css, Javascript, Html',
        href: 'https://snake-game-box.vercel.app/',
    },
    {
        id: 3,
        color: "bg-red-500",
        title: 'Task Management Application',
        techStack:
            'Mongodb, Express, Javascript ',
        href: 'https://github.com/Nikeshchaudhary52494/task_management_application.git',
    },
    {
        id: 4,
        color: "bg-violet-500",
        title: 'Tic tac toe game',
        techStack:
            'React, Firebase, Tailwind CSS',
        href: 'https://tic-tac-toe-game-box.vercel.app/',
    },
]