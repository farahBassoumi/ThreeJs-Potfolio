import {
  //tech
  C,
  C_plus,
  C_sharp,
  js,
  Microsoft_Azure,
  nest,
  NET_Core,
  react,
  Python,
  postgres,
  ts,
  angular,
  figma,
  git,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  threejs,
  java,

  logo,
  backend,
  creator,
  mobile,
  web,
  menu,
  close,

  bird,
  piano,

  //companies
  singleClic,
  GTa,
  MsSolutions,
  walking_aiesec,
  walking_logo,
  machineLearning,
  devops,
//projects
birdy,
studyflux,
ProjectTracker



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
      icon: devops,
    },
    {
      title: "PROFESSIONAL PIANIST",
      icon: piano,
    },
    {
      title: "MACHINE LEARNING PRACTITIONER",
      icon: machineLearning,
    },
    {
      title: "COMPETITIVE PROGRAMMER",
      icon: backend,
    },
    {
      title: "GLOBAL VONLENTEER",
      icon: walking_logo,
    },
    ];
    

const technologies = [


  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Angular TS",
    icon: angular,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "NET_Core",
    icon: NET_Core,
  },  
 
  {
    name: "nest",
    icon: nest,
  },
  {
    name: "Microsoft_Azure",
    icon: Microsoft_Azure,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: " SQL SERVER",
    icon: postgres,
  },

 
  // {
  //   name: "JavaScript",
  //   icon: javascript,
  // },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  // {
  //   name: "C_sharp",
  //   icon: C_sharp,
  // },
 
  {
    name: "Tailwind CSS",
    icon: C_plus,
  }, 
   {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
 
  {
    name: "Python",
    icon: Python
  },


];

const experiences = [
  {
    title: "Backend Developer",
    company_name: "SingleClic, EGYPT",
    icon: singleClic,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Sept 2024",
    points: [
      "working on a concrete e-commerce web application 'COVETI ' using Microsoft .NET MVC, ensuring high performance and optimizing some of its functionalities.",
      "Deploying a .NET MAUI desktop application in a professional environment.",
      "Actively participating in daily meetings and code reviews, providing constructive feedback to improve team performance.",
      "Collaborating with cross-functional teams, including testers and developers, to deliver high-quality solutions.",
          ],
  },
  {
    title: "Fullstack Developer",
    company_name: "MsSolutions, TUNISIA",
    icon: MsSolutions,
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
    icon: walking_aiesec,
    iconBg: "#E6DEDD",
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
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    
      {
        name: ".net core",
        color: "yellow-text-gradient",
      },
      {
        name: "gemini API",
        color: "pink-text-gradient",
      },
    ],
    image: studyflux,
    source_code_link: "https://github.com/Fabeure/Studyfied",
  },
  {
    name: "BIRDY",
    description:
    // A a psychological blog web application with role-based UI, authentication, and authorization using Angular
      "A psychological blog web application with role-based UI, authentication, and JWT authorization. It enables users to upload, like, comment and save blogs and to connect and follow other users",
    tags: [
      {
        name: ".net core MVC",
        color: "blue-text-gradient",
      },
      {
        name: ".net Identity",
        color: "pink-text-gradient",
      },
      {
        name: "angular 16 ",
        color: "green-text-gradient",
      },
     
    ],
    image: birdy,
    source_code_link: "https://github.com/farahBassoumi/birdy-front",
  },
  {
    name: "PROJECT TRACKER",
    description:
    // Powered by NestJS 5, React 5, and PostgreSQL
      "a Project Tracker web application built based on event-driven architecture using SSE and WebSockets for real-time tracking.  It allows users manage projects and assign tasks to other users in a flexible effective way.",
    tags: [
      {
        name: "nestJs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "sse",
        color: "pink-text-gradient",
      },
      {
        name: "webSockets",
        color: "purple-text-gradient",
      },
    ],
    image: ProjectTracker,
    source_code_link: "https://github.com/farahBassoumi/ProjectTracker-NestJS",
  },
];

export { services, technologies, experiences, testimonials, projects };