import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCode, FaDiagramProject, FaCertificate, FaMugSaucer } from 'react-icons/fa6';

function Number() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { 
      icon: FaCode, 
      value: '100+', 
      label: 'Hours of Coding',
      color: 'from-primary to-secondary'
    },
    { 
      icon: FaDiagramProject, 
      value: '5+', 
      label: 'Projects Built',
      color: 'from-secondary to-accent'
    },
    { 
      icon: FaCertificate, 
      value: '1+', 
      label: 'Certifications',
      color: 'from-accent to-primary'
    },
    { 
      icon: FaMugSaucer, 
      value: '∞', 
      label: 'Cups of Coffee',
      color: 'from-primary to-secondary'
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
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="py-20 lg:py-24 bg-gradient-to-br from-neutral via-neutral to-base-300 relative overflow-hidden h-[300px] flex justify-center items-center text-center
    max-[640px]:flex-col  max-[640px]:h-auto max-[640px]:py-12"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="group relative"
            >
              <div className="relative bg-base-100/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-base-content/5 hover:border-primary/30 transition-all duration-300 text-center">
                {/* Icon */}
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <stat.icon className="w-7 h-7 text-white" />
                </div>

                {/* Value */}
                <motion.h3 
                  className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white to-base-content/80 bg-clip-text text-transparent"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3, duration: 0.5, ease: 'backOut' }}
                >
                  {stat.value}
                </motion.h3>

                {/* Label */}
                <p className="text-base-content/60 font-medium">{stat.label}</p>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10 blur-xl`} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Number