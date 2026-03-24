import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaArrowUpRightFromSquare } from 'react-icons/fa6';
import { IoDocumentText } from 'react-icons/io5';
import '../image/im.css';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="max-w-4xl"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <span className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4 block">
              Academic Background
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              My{' '}
              <span className="bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
                Education
              </span>
            </h2>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-primary rounded-full" />
            
            <motion.div
              className="bg-base-200/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-base-content/5 hover:border-secondary/30 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0 shadow-lg shadow-secondary/30">
                  <FaGraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    King Mongkut's Institute of Technology Ladkrabang
                  </h3>
                  <p className="text-lg text-base-content/70">
                    Bachelor of Science in Applied Mathematics
                  </p>
                </div>
              </div>

              {/* Transcript Button */}
              <div className="flex flex-wrap items-center gap-3">
                <motion.button
                  className="btn btn-secondary btn-sm gap-2 rounded-full"
                  onClick={() => document.getElementById('transcript_modal').showModal()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IoDocumentText className="w-4 h-4" />
                  View Transcript
                </motion.button>
                
                {/* <a
                  href="https://www.kmitl.ac.th/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-ghost btn-sm gap-2 rounded-full"
                >
                  <FaArrowUpRightFromSquare className="w-4 h-4" />
                  Visit University
                </a> */}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Transcript Modal */}
        <dialog id="transcript_modal" className="modal">
          <div className="modal-box w-11/12 max-w-4xl h-[80vh] p-0 overflow-hidden bg-base-100">
            <form method="dialog" className="absolute top-4 right-4 z-10">
              <button className="btn btn-circle btn-sm bg-base-100/80 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </form>
            <div className="w-full h-full bg-center bg-no-repeat bg-contain transcript" />
          </div>
          <form method="dialog" className="modal-backdrop bg-base-300/50 backdrop-blur-sm">
            <button>close</button>
          </form>
        </dialog>
      </div>
    </section>
  );
};

export default Education;