import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  piano,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  
    {
      title: "FRONT END DEVELOPER",
      icon: web,
    },
    {
      title: "BACK END DEVELOPER",
      icon: mobile,
    },
    {
      title: "DEVOPS ENTHOUSIAST",
      icon: backend,
    },
    {
      title: "PROFESSIONAL PIANIST",
      icon: piano,
    },
    {
      title: "MACHINE LEARNING PRACTITIONER",
      icon: creator,
    },
    {
      title: "COMPETITIVE PROGRAMMER",
      icon: creator,
    },
    {
      title: "GLOBAL VONLENTEER",
      icon: creator,
    },
    ];
    

const technologies = [
 
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Angular TS",
    icon: reactjs,
  },
  {
    name: ".NET",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: " SQL SERVER",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },

  {
    name: "C",
    icon: docker,
  },
  {
    name: "C++",
    icon: docker,
  },

  {
    name: "PYTHON",
    icon: docker,
    
  },
  {
    name: "POSTGRES",
    icon: docker,
  },

  // C, C++, Java, C#, SQL, JavaScript, Typescript, Python
  // Technologies: Angular , React , Nest JS , Microsoft .NET (Web Api, MVC, MAUI, Identity), TailWindCSS
  // Database Systems Management: Database Administration, Database Optimisation, Microsoft SQL Server,
  // PostgreSQL, MongoDB , MySQL , PL/SQL
];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "SingleClic, EGYPT",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Jun 2024 - Sept 2024",
    points: [
      "working on a concrete e-commerce web application 'COVETI' using Microsoft .NET MVC, ensuring high performance and optimizing some of its functionalities.",
      "Deploying a .NET MAUI desktop application in a professional environment.",
      "Actively participating in daily meetings and code reviews, providing constructive feedback to improve team performance.",
      "Collaborating with cross-functional teams, including testers and developers, to deliver high-quality solutions.",
          ],
  },
  {
    title: "Fullstack Developer",
    company_name: "MsSolutions, TUNISIA",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2023 - Sept 2023",
    points: [
      "writing clean, efficient, and maintainable code, while ensuring architectural compatibility across projects.",
      "Developing a user management web application incorporating role-based frontent and JWT authentication and authorization",
      "utilizing ASP.NET Core 6 Web API and Angular 16 for the frontend.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Teacher",
    company_name: "Aiesec Istanbul, TURKEY",
    icon: shopify,
    iconBg: "#383E56",
    date: "JUNE 2022 - JULY 2023",
    points: [
      "Teaching the basics of HTML and CSS  to young student .",
      "Collaborating with colleagues and learning the importance of team work .",
      "Participating in professional meetings to ensure the best teaching methedology.",
    ],
  },
 
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "STUDYFLUX",
    description:

      "AI powered studying platform integrated with the Gemini API. It provides students with multiple functionalities such as generating flashcards, quizzes, resumes and talk with a scholar ChatBot .",
    tags: [
      {
        name: "react TS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "purple-text-gradient",
      },
      {
        name: "Asp.Net Core Web Api",
        color: "yellow-text-gradient",
      },
      {
        name: "Gemini API",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Fabeure/Studyfied",
  },
  {
    name: "BIRDY",
    description:
    // A a psychological blog web application with role-based UI, authentication, and authorization using Angular
      "A psychological blog web application with role-based UI, authentication, and JWT authorization. It enables users to upload, like, comment and save blogs and to connect and follow other users",
    tags: [
      {
        name: "ASP.NET Core MVC",
        color: "blue-text-gradient",
      },
      {
        name: ".NET Identity",
        color: "blue-text-gradient",
      },
      {
        name: "Angular 16 ",
        color: "green-text-gradient",
      },
     
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
    //
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/farahBassoumi/ProjectTracker-NestJS",
  },
];

export { services, technologies, experiences, testimonials, projects };