import {
  FaReact,
  FaVuejs,
  FaNode,
  FaSquareJs,
  FaDatabase,
  FaPython,
  FaJava,
} from "react-icons/fa6";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import React from "react";
import "../image/skill-animation.css";

const Skills = () => {
  const icons = [
    <FaReact className="w-16 h-16 text-white hover:text-sky-300 hover:animate-spin" />,
    <FaVuejs className="w-16 h-16 text-white hover:text-emerald-400" />,
    <FaSquareJs className="w-16 h-16 text-white hover:text-yellow-200" />,
    <FaNode className="w-16 h-16 text-white hover:text-green-200" />,
    <FaJava className="w-16 h-16 text-white hover:text-red-600" />,
    <FaPython className="w-16 h-16 text-white hover:text-sky-700" />,
    <SiMysql className="w-16 h-16 text-white hover:text-orange-500" />,
    <SiMongodb className="p-1.5 w-16 h-16 text-white hover:bg-white hover:text-green-900 rounded-full" />,
  ];

  return (
    <div
      id="section2"
      className="bg-neutral overflow-hidden text-center h-auto sm:h-64 ">
      <h3 className="text-white font-bold mt-10 mb-10 text-xl">My Skills</h3>
      <div className="marquee-loop-container max-w-screen-md mx-auto">
        <div className="marquee-loop-content">
          {[...icons, ...icons].map((icon, index) => (
            <div key={index} className="mx-5 flex-shrink-0">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
