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
  tailwind,
  nodejs,
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
  APPWRITER,
  FIRE
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
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
    name: "Appwrite",
    icon: APPWRITER,
  },
  
  
 
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Erica ",
    designation: "CEO",
    company: "Nutorla Clothing",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Fosu does.",
    name: "Andrew Oppong",
    designation: "",
    company: "DevOps Engineer Azure Space",
    image: "",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Kwame Kankam ",
    designation: "",
    company: "Property Datahub",
    image: "",
  },
];

const projects = [
  {
    name: "Nutorla Store",
    description:
      "Ecommerce platform with authentication, payment via Paypal and Paystack and also supports multicurrency.",
    tags: [
      {
        name: "NEXT.JS",
        color: "blue-text-gradient",
      },
      {
        name: "SANITY",
        color: "green-text-gradient",
      },
      {
        name: "AUTH0",
        color: "pink-text-gradient",
      },
     
    ],
    image: carrent,
    source_code_link: "https://nutorlastore.com",
  },
  {
    name: "Custom Product Link",
    description:
      "A custom product links with integrated payment systems, making them ideal for streamlined digital marketing.",
    tags: [
      
      {
        name: "PAYSTACK",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://paystack.com/buy/oraimo-143-amoled-screen-bluetooth-call-built-in-musi-rxvwae",
  },
  {
    name: "Simple Storefront",
    description:
      "A simple storefront that showcase your products and allows purchase",
    tags: [
      {
        name: "PAYSTACK",
        color: "blue-text-gradient",
      },
    
    ],
    image: tripguide,
    source_code_link: "https://paystack.shop/tech-watch",
  },
];

export { services, technologies, experiences, testimonials, projects };
