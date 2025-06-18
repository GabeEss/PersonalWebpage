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
        title: "Example",
        description: "This description is some kind of filler for now.",
        tags: ['Typescript, JavaScript, React, Node.js'],
        icon: 'link',
        link: "https://github.com/"
    },
    {
        id: "2",
        title: "Example 2",
        description: "This description is some kind of filler for now.",
        tags: ['Typescript, JavaScript, React, Node.js'],
        icon: 'github',
        link: "https://github.com/"
    },
    {
        id: "3",
        title: "Example 3",
        description: "This description is some kind of filler for now.",
        tags: ['Typescript, JavaScript, React, Node.js'],
        icon: 'link',
        link: "https://github.com/"
    },
] as ProjectItem[];