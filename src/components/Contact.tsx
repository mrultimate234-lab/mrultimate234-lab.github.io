import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Phone, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const { ref, isInView } = useInView();

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-500/5 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent-400 font-display font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-lg mx-auto">
            If you'd like to connect with me or see what I'm working on, feel
            free to reach out. I'm always open to new ideas and opportunities!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass rounded-3xl p-8 sm:p-12"
        >
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            {/* Phone Card */}
            <a
              href="tel:0551137332"
              className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-primary-600/20 to-primary-500/10 border border-primary-500/20 hover:border-primary-500/40 transition-all group w-full sm:w-auto"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Phone size={24} className="text-primary-400" />
              </div>
              <div>
                <p className="text-gray-400 text-xs font-medium">Phone</p>
                <p className="text-white text-lg font-semibold">0551137332</p>
              </div>
              <ArrowUpRight
                size={20}
                className="text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity ml-auto"
              />
            </a>
          </div>

          {/* Additional Message */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <Send size={16} className="text-primary-400" />
              <span>
                Explore my portfolio and projects above, or reach out anytime!
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
