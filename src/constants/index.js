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
      "Happy to have had Fosu work on our web app.What I enjoyed about the process is his prompt response to requests and making room to accomodate extra adds whenever the need be.Aside a very neat outlook of the site, the customer experience for us is commendable.I would recommend Fosu to anyone looking to build a web app anytime",
    name: "Erica Dogbeda Yaotsey ",
    designation: "Creative Director  ",
    company: "Nutorla Clothing",
    image: "Erica.png",
  },
  {
    testimonial:
      "I've had the pleasure of working with Fosu and I must say, his skills is truly impressive.His dedication, problem-solving abilities, and commitment to delivering high-quality code are outstanding.Fosu is a valuable asset to any team, and I will recommend him for your web development needs",
    name: "Andrew Oppong",
    designation: "",
    company: "DevOps Engineer Azure Space",
    image: "Andrew.png",
  },
  {
    testimonial:
      "Kwadwo is a very talented software developer.He had worked with me on several project and his skills sets are amazing.He is your go to person when you need anything software",
    name: "Kwame Kankam ",
    designation: "",
    company: "Property Datahub",
    image: "Kwame.png",
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
