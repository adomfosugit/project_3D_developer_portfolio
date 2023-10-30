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
 carrent,
  jobit,
  tripguide,
  APPWRITER,
  
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

export { services, technologies, testimonials, projects };
