import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

//  
const Project = () => {
  return (
    <div className="border border-neutral-900 pb-8">
      <h1 className="my-20 text-4xl text-center ">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className=" my-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity:1,x:50}}
            initial={{opacity:0,x:1}}
            transition={{duration:1}}
            className="w-full lg:w-1/4">
              <img
                src={project.image}
                width={150}
                height={150}
                alt="project.title"
                className="rounded mb-6"
              />
            </motion.div>
            
              <motion.div
                whileInView={{opacity:1,x:-20}}
                initial={{opacity:0,x:1}}
                transition={{duration:1}}
              className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map(( tech, index) => (
                     <span key={index} className="mr-2 rounded bg-neutral-900 text-sm font-medium
                     px-2 py-1 text-purple-900 ">{tech}</span>
                    ))}
              </motion.div>
            </div>
          
        ))}
      </div>
    </div>
  );
};

export default Project;

// 38.35 time to continue
