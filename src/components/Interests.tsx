import { motion } from 'framer-motion';
import { useInView } from './useInView';

const interests = [
  { emoji: '💻', label: 'Coding & Web Development', color: 'from-blue-500 to-cyan-500' },
  { emoji: '🤖', label: 'Artificial Intelligence', color: 'from-purple-500 to-pink-500' },
  { emoji: '🎨', label: 'Graphic & Digital Design', color: 'from-orange-500 to-red-500' },
  { emoji: '⚽', label: 'Football', color: 'from-green-500 to-emerald-500' },
  { emoji: '🔬', label: 'Science & Technology', color: 'from-indigo-500 to-blue-500' },
  { emoji: '🎮', label: 'Gaming', color: 'from-violet-500 to-purple-500' },
  { emoji: '🌐', label: 'Websites & Digital Projects', color: 'from-teal-500 to-cyan-500' },
  { emoji: '🎬', label: 'Creative Content', color: 'from-rose-500 to-pink-500' },
];

export default function Interests() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent-400 font-display font-semibold text-sm tracking-widest uppercase">
            What Excites Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-3">
            My <span className="gradient-text">Interests</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {interests.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl glass p-6 text-center hover:-translate-y-2 transition-all duration-300 cursor-default"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              <span className="text-4xl block mb-3">{item.emoji}</span>
              <p className="text-white text-sm font-medium">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
