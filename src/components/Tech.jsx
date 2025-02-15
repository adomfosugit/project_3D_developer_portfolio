import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {motion} from 'framer-motion'

const Tech = () => {
  return (

    
    
    <div className=' p-4 flex flex-row flex-wrap justify-center gap-10'>
     
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} name={technology.name}/>
          </div>
        ))}
      
      
    </div>
  );
};

export default SectionWrapper(Tech, "");
