import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaReact,
  FaVuejs,
  FaNode,
  FaSquareJs,
  FaDatabase,
  FaPython,
  FaJava,
} from 'react-icons/fa6';
import { SiExpress, SiMongodb, SiMysql, SiTypescript, SiTailwindcss, SiNextdotjs, SiGit } from 'react-icons/si';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skills = [
    { name: 'React', icon: FaReact, color: 'text-sky-400', bgColor: 'bg-sky-400/10' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-white', bgColor: 'bg-white/10' },
    { name: 'Vue.js', icon: FaVuejs, color: 'text-emerald-400', bgColor: 'bg-emerald-400/10' },
    { name: 'JavaScript', icon: FaSquareJs, color: 'text-yellow-400', bgColor: 'bg-yellow-400/10' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-400', bgColor: 'bg-blue-400/10' },
    { name: 'Node.js', icon: FaNode, color: 'text-green-400', bgColor: 'bg-green-400/10' },
    { name: 'Express', icon: SiExpress, color: 'text-gray-400', bgColor: 'bg-gray-400/10' },
    { name: 'Java', icon: FaJava, color: 'text-orange-400', bgColor: 'bg-orange-400/10' },
    { name: 'Python', icon: FaPython, color: 'text-blue-300', bgColor: 'bg-blue-300/10' },
    { name: 'MySQL', icon: SiMysql, color: 'text-cyan-400', bgColor: 'bg-cyan-400/10' },
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500', bgColor: 'bg-green-500/10' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-300', bgColor: 'bg-cyan-300/10' },
    { name: 'Git', icon: SiGit, color: 'text-orange-500', bgColor: 'bg-orange-500/10' },
    { name: 'Database', icon: FaDatabase, color: 'text-purple-400', bgColor: 'bg-purple-400/10' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="section2"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 gap-4 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`group relative flex flex-col items-center p-4 md:p-6 rounded-2xl ${skill.bgColor} border border-transparent hover:border-primary/30 transition-all duration-300 cursor-pointer`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 md:w-16 md:h-16 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110`}>
                <skill.icon className={`w-10 h-10 md:w-12 md:h-12 ${skill.color}`} />
              </div>
              
              {/* Skill Name */}
              <span className="text-xs md:text-sm font-medium text-center text-base-content/80 group-hover:text-primary transition-colors">
                {skill.name}
              </span>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl ${skill.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee Section for Additional Visual Interest */}
        <motion.div
          className="mt-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base-200 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base-200 to-transparent z-10" />
            
            <motion.div
              className="flex gap-8"
              animate={{ x: [0, -1000] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
            >
              {[...skills, ...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex items-center gap-2 text-base-content/30 whitespace-nowrap"
                >
                  <skill.icon className="w-5 h-5" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
