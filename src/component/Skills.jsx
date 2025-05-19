import { FaReact,FaVuejs,FaNode,FaSquareJs,FaDatabase,FaPython,FaJava } from "react-icons/fa6";
import { SiExpress,SiMongodb,SiMysql} from "react-icons/si";

const Skills = () => {
  return (
    <div id='section2' className="bg-neutral overflow-hidden text-center h-auto sm:h-64 ">
        <h3 className="text-white font-bold mt-10 text-xl">My Skills</h3>
        <ul className="text-neutral-content mt-16 flex flex-col items-center sm:flex-row justify-center">
          <li className="my-5 mx-5 sm:my-0">
            <FaReact className="w-16 h-16 hover:text-sky-300 hover:animate-spin" />
          </li>
          <li className="my-5 mx-5 sm:my-0">
            <FaVuejs className="w-16 h-16 hover:text-emerald-400" />
          </li>
          <li className="my-5 mx-5 sm:my-0">
            <FaSquareJs className="w-16 h-16 hover:text-yellow-200" />
          </li>
          <li className="my-5 mx-5 sm:my-0">
            <FaNode className="w-16 h-16 hover:text-green-200" />
          </li>
          <li className="my-5 mx-5 sm:my-0">
            <FaJava className="w-16 h-16 hover:text-red-600" />
          </li>
          <li className="my-5 mx-5 sm:my-0">
            <FaPython className="w-16 h-16 hover:text-sky-700" />
          </li>
          <li className="my-5 mx-5 sm:my-0">
            <SiMysql className="w-16 h-16 hover:text-orange-500" />
          </li>
          <li className="my-5 mx-5 sm:my-0">
            <SiMongodb className="p-1.5 w-16 h-16 hover:bg-white hover:text-green-900 rounded-full" />
          </li>
        </ul>
    </div>
  );
}

export default Skills