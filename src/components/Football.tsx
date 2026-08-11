import { motion } from 'framer-motion';
import { useInView } from './useInView';

export default function Football() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative py-20">
      <div ref={ref} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-500/10"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px), repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 51px)`,
            }} />
          </div>

          <div className="relative p-8 sm:p-12 lg:p-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Left — Big Emoji + Title */}
              <div className="text-center lg:text-left shrink-0">
                <motion.span
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ type: 'spring', delay: 0.3 }}
                  className="text-7xl sm:text-8xl block mb-4"
                >
                  ⚽
                </motion.span>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  Football
                </h3>
                <p className="text-green-400 font-display text-sm mt-1">
                  A Major Passion
                </p>
              </div>

              {/* Right — Content */}
              <div className="space-y-4">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Football is one of my major interests. I enjoy discussing players, teams, formations, competitions, World Cups, transfers, and player comparisons.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  I also enjoy football gaming and experimenting with different teams, formations, and players.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {['Players', 'Teams', 'Formations', 'World Cup', 'Transfers', 'Gaming', 'Tactics'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 rounded-full bg-green-500/10 text-green-400 text-xs font-medium border border-green-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
