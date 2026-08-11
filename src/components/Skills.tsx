import { motion } from 'framer-motion';
import { useInView } from './useInView';
import { Code, Palette, Cpu, Lightbulb } from 'lucide-react';

const skills = [
  {
    icon: Code,
    title: 'Web Development',
    description:
      'I enjoy learning HTML, CSS, and web technologies and creating websites with modern layouts and designs.',
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description:
      'I enjoy creating flyers, advertisements, posters, presentations, and digital artwork, paying close attention to colors, layouts, and details.',
    color: 'from-orange-500 to-pink-500',
    iconColor: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
  },
  {
    icon: Cpu,
    title: 'Technology',
    description:
      "I'm interested in how modern technology works, especially AI, smartphones, computers, software, and digital tools.",
    color: 'from-purple-500 to-indigo-500',
    iconColor: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solving',
    description:
      "I like figuring things out when something doesn't work and finding better ways to accomplish a task.",
    color: 'from-green-500 to-emerald-500',
    iconColor: 'text-green-400',
    bgColor: 'bg-green-500/10',
  },
];

export default function Skills() {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[200px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary-400 font-display font-semibold text-sm tracking-widest uppercase">
            What I'm Good At
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-3">
            Skills & <span className="gradient-text">Abilities</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="group relative overflow-hidden rounded-3xl glass p-8 hover:-translate-y-2 transition-all duration-300"
              >
                {/* Gradient Overlay on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-[0.06] transition-opacity duration-500`}
                />

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl ${skill.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={28} className={skill.iconColor} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-200 transition-colors">
                  {skill.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {skill.description}
                </p>

                {/* Bottom Gradient Line */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
