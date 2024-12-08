import { Code, Briefcase, GraduationCap, Award } from "lucide-react";
import { SEO } from "../components/SEO";

export function About() {
  return (
    <>
      <SEO
        title="About Me | Hasitha Sandakelum"
        description="Learn about my journey as a Full-Stack Developer, my experience, education, and the technologies I work with."
        keywords="about hasitha sandakelum, developer experience, technical skills, full-stack development"
      />
      <main className="pt-16 min-h-screen">
        {/* Rest of the About page content remains the same */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-4xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              About Me
            </span>
          </h1>

          {/* Introduction */}
          <div className="bg-gray-800/50 rounded-xl p-6 mb-8 backdrop-blur-sm border border-gray-700">
            <div className="flex items-start gap-4">
              <Code className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Who I Am
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  I'm a passionate Freelancer specializing in Game Design, Web
                  Development, and React. I love creating dynamic, user-focused
                  digital experiences that blend functionality with visual
                  appeal. With a strong foundation in both creative design and
                  technical implementation, I transform ideas into engaging
                  solutions through clean code and innovative thinking.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Work Experience */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
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
            </div>

            {/* Education */}
            <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
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
            </div>
          </div>

          {/* Skills */}
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700">
            <div className="flex items-start gap-4">
              <Award className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold mb-4 text-white">
                  Skills & Technologies
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "React",
                    "Node.js",
                    "TypeScript",
                    "Python",
                    "MongoDB",
                    "AWS",
                    "Docker",
                    "Git",
                  ].map((skill) => (
                    <div
                      key={skill}
                      className="bg-gray-700/50 rounded-lg px-4 py-2 text-center"
                    >
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>

          
        </div>
      </main>
    </>
  );
}
