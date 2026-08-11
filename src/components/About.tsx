import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { GraduationCap, MapPin, Target, Heart } from 'lucide-react';

const personality = [
  { emoji: '🔍', label: 'Curious', desc: 'I enjoy discovering new things.' },
  { emoji: '🎨', label: 'Creative', desc: 'I like turning ideas into projects.' },
  { emoji: '💪', label: 'Determined', desc: 'I keep working until I get the result I want.' },
  { emoji: '💻', label: 'Tech-minded', desc: 'Technology is one of my biggest interests.' },
  { emoji: '🔎', label: 'Detail-oriented', desc: 'I care about how things look and work.' },
  { emoji: '📚', label: 'Always learning', desc: 'I believe there is always something new to learn.' },
];

export default function About() {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      {/* Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-display font-semibold text-sm tracking-widest uppercase">
            Get To Know Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-3">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 sm:p-10 space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Hi! I'm <span className="text-white font-semibold">Ephraim Addai Amoakohene</span>, a young Ghanaian student with a strong interest in technology, coding, football, science, creativity, and digital design.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I enjoy learning how things work, experimenting with new ideas, and turning my ideas into digital projects. I'm especially interested in web development, AI, graphic design, and technology.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I'm naturally curious and I like asking questions, solving problems, and improving my work until I'm satisfied with the result.
              </p>

              {/* Education Cards */}
              <div className="grid sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-primary-500/20 flex items-center justify-center shrink-0">
                    <GraduationCap size={20} className="text-primary-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Education</p>
                    <p className="text-gray-400 text-xs mt-1">JHS Graduate — Beautiful Beginning Montessori</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/20 flex items-center justify-center shrink-0">
                    <Target size={20} className="text-accent-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Next Goal</p>
                    <p className="text-gray-400 text-xs mt-1">Senior High School — Prempeh College</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Location</p>
                    <p className="text-gray-400 text-xs mt-1">Ghana 🇬🇭</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-pink-500/20 flex items-center justify-center shrink-0">
                    <Heart size={20} className="text-pink-400" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Passion</p>
                    <p className="text-gray-400 text-xs mt-1">Tech, Coding & Creative Design</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Personality */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-display font-semibold text-white mb-6">
              My Personality
            </h3>
            <div className="space-y-4">
              {personality.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-2xl glass hover:bg-white/[0.08] transition-colors group"
                >
                  <span className="text-2xl mt-0.5">{item.emoji}</span>
                  <div>
                    <p className="text-white font-semibold group-hover:text-primary-300 transition-colors">
                      {item.label}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
