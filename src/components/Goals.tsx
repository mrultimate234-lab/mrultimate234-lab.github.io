import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Rocket, Star, Zap } from 'lucide-react';

export default function Goals() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent-500/5 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-display font-semibold text-sm tracking-widest uppercase">
            Looking Ahead
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-3">
            My <span className="gradient-text">Goals</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass rounded-3xl p-8 text-center group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary-500/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Rocket size={32} className="text-primary-400" />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-3">
              Develop My Skills
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Continue developing my technology, coding, design, and creative skills to become a well-rounded creator.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="glass rounded-3xl p-8 text-center group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-accent-500/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Star size={32} className="text-accent-400" />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-3">
              Build Real Projects
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Use my skills to build impressive real-world projects that people can actually use and enjoy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass rounded-3xl p-8 text-center group hover:-translate-y-2 transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
              <Zap size={32} className="text-purple-400" />
            </div>
            <h3 className="text-lg font-display font-bold text-white mb-3">
              Never Stop Learning
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Keep learning, become better at what I do, and create things that make a positive impact.
            </p>
          </motion.div>
        </div>

        {/* Motto */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 text-center"
        >
          <div className="inline-block glass rounded-2xl px-10 py-6">
            <p className="text-2xl sm:text-3xl font-display font-bold gradient-text">
              « Learn. Create. Improve. Repeat. »
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
