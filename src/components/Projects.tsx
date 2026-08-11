import { motion } from 'framer-motion';
import { useInView } from './useInView';
import {
  Globe,
  Paintbrush,
  Smartphone,
  Bot,
  BarChart3,
  CodeXml,
  Clapperboard,
} from 'lucide-react';

const projects = [
  {
    icon: Globe,
    title: 'Website Design & Development',
    desc: 'Building modern, responsive websites with clean layouts and great user experiences.',
    color: 'from-blue-500 to-cyan-400',
  },
  {
    icon: Paintbrush,
    title: 'Digital Flyers & Posters',
    desc: 'Creating eye-catching visual designs for various purposes with attention to detail.',
    color: 'from-orange-500 to-red-400',
  },
  {
    icon: Smartphone,
    title: 'Technology Projects',
    desc: 'Exploring and experimenting with modern tech, software, and digital tools.',
    color: 'from-purple-500 to-pink-400',
  },
  {
    icon: Bot,
    title: 'AI-Assisted Creative Projects',
    desc: 'Using artificial intelligence to enhance creative work and explore new possibilities.',
    color: 'from-green-500 to-emerald-400',
  },
  {
    icon: BarChart3,
    title: 'Product Ads & Presentations',
    desc: 'Designing compelling advertisements and presentation materials.',
    color: 'from-yellow-500 to-orange-400',
  },
  {
    icon: CodeXml,
    title: 'HTML & CSS Coding',
    desc: 'Practicing and building web pages with HTML and CSS from scratch.',
    color: 'from-indigo-500 to-blue-400',
  },
  {
    icon: Clapperboard,
    title: 'Creative Story Concepts',
    desc: 'Developing creative movie and action-story concepts with rich narratives.',
    color: 'from-rose-500 to-pink-400',
  },
];

export default function Projects() {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[150px]" />
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent-400 font-display font-semibold text-sm tracking-widest uppercase">
            My Creative Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white mt-3">
            Projects & <span className="gradient-text">Explorations</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of the things I've worked on or explored — each one teaching me
            something new.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="group relative rounded-3xl glass p-7 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
              >
                {/* Number */}
                <span className="absolute top-4 right-5 text-5xl font-display font-bold text-white/[0.03] group-hover:text-white/[0.06] transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  <Icon size={24} className="text-white" />
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-2 group-hover:text-primary-200 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {project.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
