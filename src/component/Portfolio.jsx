import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { FaArrowUpRightFromSquare, FaGithub } from 'react-icons/fa6';
import { SiNextdotjs, SiNuxtdotjs, SiVuedotjs, SiFlutter, SiTypescript ,SiTailwindcss} from 'react-icons/si';
import '../image/im.css';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      title: 'Pokemon API',
      description: 'A Pokemon encyclopedia built with Next.js and PokeAPI',
      image: 'imgpo',
      tech: [
        { icon: SiNextdotjs, label: 'Next.js' },
        {icon: SiTailwindcss, label: 'Tailwind'}
      ],
      link: 'https://nextjs-p-nine.vercel.app/',
      github: null,
    },
    {
      id: 2,
      title: 'Certificate Gallery',
      description: 'Collection of my certifications and achievements',
      image: 'cpy',
      tech: [],
      link: null,
      github: null,
    },
    {
      id: 3,
      title: 'Weather App',
      description: 'Real-time weather application with TypeScript',
      image: 'weatherApp',
      tech: [
        { icon: SiNextdotjs, label: 'Next.js' },
        { icon: SiTypescript, label: 'TypeScript' },
      ],
      link: 'https://weather-tau-lac-80.vercel.app/',
      github: null,
    },
    {
      id: 4,
      title: 'Favourite Meals',
      description: 'Recipe app with Nuxt.js and Pinia state management',
      image: 'meals',
      tech: [
        { icon: SiNuxtdotjs, label: 'Nuxt' },
        { icon: null, label: 'Pinia' },
      ],
      link: 'https://nuxt-meals.vercel.app/',
      github: null,
    },
    {
      id: 5,
      title: 'Blog Management',
      description: 'Full-featured blog dashboard built with Vue.js',
      image: 'blogs',
      tech: [
        { icon: SiVuedotjs, label: 'Vue.js' },
        { icon: SiTailwindcss, label: 'Tailwind' }
      ],
      link: 'https://blog-dashboard-eta.vercel.app/',
      github: null,
    },
    {
      id: 6,
      title: 'Shopping App',
      description: 'Cross-platform mobile shopping application',
      image: 'shoppingApp',
      tech: [{ icon: SiFlutter, label: 'Flutter' }],
      link: 'https://flutter-shoppingapp.netlify.app/',
      github: null,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="section3"
      ref={ref}
      className="py-20 lg:py-32 bg-gradient-to-b from-base-200 to-base-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-lg text-base-content/60 max-w-2xl mx-auto">
            A collection of projects I've built to sharpen my skills
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
            >
              <Tilt scale={1.02} transitionSpeed={2000} tiltReverse={true}>
                <div className="relative bg-base-100 rounded-2xl overflow-hidden border border-base-content/5 hover:border-primary/30 transition-all duration-300 shadow-lg hover:shadow-xl">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <div className={`w-full h-full bg-cover bg-center ${project.image} transform group-hover:scale-110 transition-transform duration-500`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-base-100 via-transparent to-transparent" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-circle btn-ghost text-white hover:bg-white/20"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaArrowUpRightFromSquare className="w-5 h-5" />
                        </motion.a>
                      )}
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-circle btn-ghost text-white hover:bg-white/20"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FaGithub className="w-5 h-5" />
                        </motion.a>
                      )}
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.link ? (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {project.title}
                        </a>
                      ) : (
                        project.title
                      )}
                    </h3>
                    <p className="text-base-content/60 text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-base-200 text-xs font-medium"
                        >
                          {t.icon && <t.icon className="w-3 h-3" />}
                          {t.label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.a
            href="https://github.com/Naridz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-lg gap-2 rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
