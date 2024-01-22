import byte from "../assets/byte.png"
import snakegame from "../assets/snakegame.png"
import oldportfolio from "../assets/oldportfolio.png"
import taskmanagement from "../assets/taskmanagement.jpg"
import foodapp from "../assets/foodapp.png"

export const projectCard = [
    {
        id: 1,
        color: "bg-cyan-500",
        title: 'Byte Ecommerce',
        techStack: 'React, Express, Mongodb, Tailwind css, Redux toolkit',
        imageUrl: byte,
        href: 'https://byte-ecommerce.vercel.app/',
    },
    {
        id: 2,
        color: "bg-green-500",
        title: 'Snake Game',
        techStack:
            'Tailwind css, Javascript, Html',
        imageUrl: snakegame,
        href: 'https://snake-game-box.vercel.app/',
    },
    {
        id: 3,
        color: "bg-red-500",
        title: 'Task Management Application',
        techStack:
            'Mongodb, Express, Javascript ',
        imageUrl: taskmanagement,
        href: 'https://github.com/Nikeshchaudhary52494/task_management_application.git',
    },
    {
        id: 4,
        color: "bg-blue-500",
        title: 'Flutter Food App',
        techStack: 'Flutter, Dart',
        imageUrl: foodapp,
        href: 'https://github.com/Nikeshchaudhary52494/flutterFoodApp.git',
    },
    {
        id: 5,
        color: "bg-pink-500",
        title: 'Old Portfolio',
        techStack: 'Javascript, Html, Tailwind css',
        imageUrl: oldportfolio,
        href: 'https://github.com/Nikeshchaudhary52494/flutterFoodApp.git',
    },
];