export type ProjectItem = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    icon?: 'link' | 'github';
    link?: string;
}

export default [
    {
        id: "1",
        title: "Personal Webpage",
        description: "I built this webpage to showcase my projects and save you the trouble of sifting through my github repository.",
        tags: ['Typescript, Svelte, SCSS'],
        icon: 'github',
        link: "https://github.com/GabeEss/PersonalWebpage"
    },
    {
        id: "2",
        title: "Name Book",
        description: "A mock social media platform. Supports real-time posts, comments, and messaging with websockets. Supports making friends and events.",
        tags: ['Mongo, Express, React, Node.js, Socket.io'],
        icon: 'link',
        link: "https://my-name-book.netlify.app/"
    },
    {
        id: "3",
        title: "Get It",
        description: "A forum style discussion website. Features user-generated posts, comments, and persistent data storage via Google's Firestore.",
        tags: ['JavaScript, React, Firebase, CSS'],
        icon: 'link',
        link: "https://gabeess.github.io/Get-It/"
    },
    {
        id: "3",
        title: "Diagram Builder Demo",
        description: "This application allows users to create and export installation schematics as PDFs. It supports CSV export for easy data manipulation.",
        tags: ['React, Vite, CSS'],
        icon: 'link',
        link: "https://gabeess.github.io/DiagramBuilderDemo/"
    },
] as ProjectItem[];