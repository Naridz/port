import { FaGithub } from "react-icons/fa6";
import Tilt from 'react-parallax-tilt'
import "../image/im.css"

const About = () => {
  return (
    <div id="section1" className="overflow-hidden">
      <div className="container mx-auto">
        <div className="flex justify-between m-28 max-[640px]:flex-col ">
          <div className="ms-28  max-[640px]:ms-2">
            <h2 className="text-6xl font-bold hover:animate-pulse">About me</h2>
            <p className="mt-4 p-1 text-xl">Recent graduates with a passion for software development demonstrate a strong desire to continuously learn and expand their knowledge base to excel in this dynamic field.</p>
            <ul className="p-1 text-lg mt-3 p-5 max-[640px]:text-xs">
              <li className="p-1.5">
                <span className="font-bold">Name : </span>
                <span>Naris Butnampetch</span>
              </li>
              <li className="p-1.5">
                <span className="font-bold">Date of birth : </span>
                <span>14 / 03 / 2001</span>
              </li>
              <li className="p-1.5">
                <span className="font-bold">E-mail : </span>
                <span>naris2001@gmail.com</span>
              </li>
              <li className="p-1.5">
                <span className="font-bold">Phone : </span>
                <span>082-441-9859</span>
              </li>
              <li className="p-1.5">
                <span className="font-bold">Address : </span>
                <span>Ladprao 112, Bangkok. 10310</span>
              </li>
              <li className="mt-3">
                <a href="https://github.com/Naridz" target="_blank">
                  <FaGithub className="w-8 h-8 inline " />
                </a>
              </li>
            </ul>
          </div>
          <Tilt scale={1.1} transitionSpeed={2000} tiltReverse={true}>
            <div className="me-40 mt-10 w-72 h-72 border-solid border-2 border-black bg-cover bg-center rounded-full imm max-[640px]:w-full"></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default About