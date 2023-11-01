import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
       
        <h2 className={styles.sectionHeadText}>Introduction.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
         I'm a highly skilled software developer, 
         renowned for my strong foundation in TypeScript and JavaScript. 
         My extensive expertise extends to popular frameworks like React, Next.js, and Astro. 
         Additionally, I excel in crafting custom product 
         links for digital marketing and possess proficiency in backend-as-a-service 
         products such as Firebase and Appwrite. 
         My skills also encompass content management platforms and payment gateway integrations.

     Known for my rapid learning abilities and a client-centric approach, I am committed to developing efficient, scalable, and user-friendly solutions tailored to address real-world challenges. Let's collaborate and bring your innovative concepts to life.
      </motion.p>

      
    </>
  );
};

export default SectionWrapper(About, "about");
