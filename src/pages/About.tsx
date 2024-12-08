import { Code, Briefcase, GraduationCap, Award } from "lucide-react";
import { SEO } from "../components/SEO";
import { AnimatedContainer } from "../components/AnimatedContainer";
import { AnimatedCard } from "../components/AnimatedCard";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../utils/animations";

export function About() {
  return (
    <>
      <SEO
        title="About Me | Hasitha Sandakelum"
        description="Learn about my journey as a Full-Stack Developer, my experience, education, and the technologies I work with."
        keywords="about hasitha sandakelum, developer experience, technical skills, full-stack development"
      />
      <main className="pt-16 min-h-screen">
        <AnimatedContainer className="py-12">
          <motion.h1 className="text-4xl font-bold mb-8" variants={slideIn}>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              About Me
            </span>
          </motion.h1>

          {/* Introduction */}
          <AnimatedCard className="mb-8" delay={0.2}>
            <div className="flex items-start gap-4">
              <Code className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Who I Am
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  I'm an enthusiastic learner diving into Game Design, Web
                  Development, and React. I’m passionate about exploring the
                  balance between functionality and aesthetics, aiming to create
                  dynamic, user-focused digital experiences. With a curious
                  mindset and a commitment to growth, I’m building a strong
                  foundation in creative design and technical implementation,
                  constantly transforming ideas into engaging solutions as I
                  learn and evolve.
                </p>
              </div>
            </div>
          </AnimatedCard>

          {/* Experience Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Work Experience */}
            <AnimatedCard delay={0.4}>
              <div className="flex items-start gap-4">
                <Briefcase className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Experience
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <h3 className="text-blue-400 font-medium">.</h3>
                      <p className="text-gray-300">.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>

            {/* Education */}
            <AnimatedCard delay={0.6}>
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-xl font-semibold mb-4 text-white">
                    Education
                  </h2>
                  <ul className="space-y-4">
                    <li>
                      <h3 className="text-blue-400 font-medium">.</h3>
                      <p className="text-gray-300">.</p>
                    </li>
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Skills */}
          <AnimatedCard delay={0.8}>
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div className="w-full">
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Skills & Technologies
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {[
                    "React",
                    "Node.js",
                    "TypeScript",
                    "Python",
                    "MongoDB",
                    "AWS",
                    "Docker",
                    "Git",
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      variants={fadeIn}
                      initial="initial"
                      animate="animate"
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="bg-gray-700/50 rounded-lg px-4 py-2 text-center hover:bg-gray-600/50 transition-colors"
                    >
                      <span className="text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedCard>
        </AnimatedContainer>
      </main>
    </>
  );
}
