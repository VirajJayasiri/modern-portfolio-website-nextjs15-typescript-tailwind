"use client";

import React from "react";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiSpringboot,
  SiFastapi,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiAngular,
  SiTailwindcss,
  SiDocker,
  SiAmazonwebservices,
  SiFirebase,
  SiGithubactions,
  SiOpencv,
  SiScikitlearn,
  SiPostman,
  SiFigma,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiChartdotjs,
  SiGit
} from "react-icons/si";
import { FaJava, FaDatabase, FaCode, FaRobot, FaCloud, FaVials, FaServer, FaBrain } from "react-icons/fa";

interface SkillItem {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  description: string;
}

const row1Skills: SkillItem[] = [
  { id: "java", name: "Java 21", category: "Languages", icon: FaJava, color: "from-orange-500/20 to-red-500/20 text-orange-600", description: "OOP, Concurrency, Spring Boot, Picocli CLI" },
  { id: "python", name: "Python", category: "Languages", icon: SiPython, color: "from-[#3776AB]/20 to-[#FFD43B]/20 text-[#3776AB]", description: "FastAPI, OpenCV, DeepFace, scikit-learn" },
  { id: "springboot", name: "Spring Boot", category: "Backend & APIs", icon: SiSpringboot, color: "from-green-500/20 to-emerald-500/20 text-green-600", description: "REST APIs, Spring Security, JWT, WebSockets" },
  { id: "fastapi", name: "FastAPI", category: "Backend & APIs", icon: SiFastapi, color: "from-teal-500/20 to-cyan-500/20 text-teal-600", description: "High-performance Python APIs, Pydantic, Auth" },
  { id: "typescript", name: "TypeScript", category: "Languages", icon: SiTypescript, color: "from-blue-500/20 to-indigo-500/20 text-blue-600", description: "Type-safe Full Stack Apps, Next.js, Angular" },
  { id: "postgresql", name: "PostgreSQL", category: "Databases", icon: SiPostgresql, color: "from-sky-500/20 to-blue-600/20 text-sky-600", description: "Relational Schema, Complex Queries, Indexing" },
  { id: "mongodb", name: "MongoDB", category: "Databases", icon: SiMongodb, color: "from-emerald-500/20 to-green-600/20 text-emerald-600", description: "NoSQL Data Models, Aggregations, Cloud Atlas" },
  { id: "nodejs", name: "Node.js & Express", category: "Backend & APIs", icon: SiNodedotjs, color: "from-green-600/20 to-lime-500/20 text-green-700", description: "Event-driven Server Applications, Middleware" },
  { id: "javascript", name: "JavaScript ES6+", category: "Languages", icon: SiJavascript, color: "from-yellow-400/20 to-amber-500/20 text-amber-600", description: "Asynchronous Code, Modern Frontends, DOM" },
  { id: "firestore", name: "Cloud Firestore", category: "Databases", icon: SiFirebase, color: "from-amber-500/20 to-orange-500/20 text-amber-600", description: "Real-time NoSQL, Security Rules, AngularFire" },
  { id: "go", name: "Go (Golang)", category: "Languages", icon: SiGo, color: "from-cyan-500/20 to-blue-500/20 text-cyan-600", description: "Systems Programming, High Concurrency Services" }
];

const row2Skills: SkillItem[] = [
  { id: "react", name: "React.js", category: "Frontend", icon: SiReact, color: "from-sky-400/20 to-cyan-500/20 text-sky-500", description: "Custom Hooks, SPA Architecture, State Management" },
  { id: "nextjs", name: "Next.js 15", category: "Frontend", icon: SiNextdotjs, color: "from-slate-700/20 to-slate-900/20 text-slate-900", description: "App Router, SSR, Turbopack, Tailwind CSS" },
  { id: "docker", name: "Docker", category: "Cloud & DevOps", icon: SiDocker, color: "from-blue-500/20 to-sky-600/20 text-blue-600", description: "Containerization, Multi-stage Builds, AWS EC2" },
  { id: "aws", name: "AWS EC2", category: "Cloud & DevOps", icon: SiAmazonwebservices, color: "from-amber-500/20 to-orange-600/20 text-amber-600", description: "Cloud Deployment, Security Groups, EC2 Linux" },
  { id: "angular", name: "Angular", category: "Frontend", icon: SiAngular, color: "from-red-600/20 to-rose-600/20 text-red-600", description: "TypeScript Framework, Angular Material, RxJS" },
  { id: "opencv", name: "OpenCV & Computer Vision", category: "AI & ML", icon: SiOpencv, color: "from-indigo-500/20 to-purple-600/20 text-indigo-600", description: "Face Detection, MTCNN, DeepFace Recognition" },
  { id: "githubactions", name: "GitHub Actions", category: "Cloud & DevOps", icon: SiGithubactions, color: "from-blue-600/20 to-indigo-600/20 text-blue-700", description: "Automated CI/CD Workflows, Test Suites" },
  { id: "scikitlearn", name: "scikit-learn", category: "AI & ML", icon: SiScikitlearn, color: "from-orange-500/20 to-amber-600/20 text-orange-600", description: "Machine Learning Models, NumPy, Pandas" },
  { id: "tailwind", name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "from-teal-400/20 to-cyan-500/20 text-teal-500", description: "Utility-first Responsive UI, Dynamic Styling" },
  { id: "postman", name: "Postman", category: "Testing & Tools", icon: SiPostman, color: "from-orange-600/20 to-red-500/20 text-orange-600", description: "API Endpoint Testing, Environments, Automation" },
  { id: "figma", name: "Figma", category: "Design & Tools", icon: SiFigma, color: "from-pink-500/20 to-purple-500/20 text-pink-600", description: "UI Wireframing, UX Design, Interactive Prototypes" }
];

const SkillCard: React.FC<{ skill: SkillItem }> = ({ skill }) => {
  const Icon = skill.icon;
  return (
    <div className="w-72 sm:w-80 mx-4 flex-shrink-0 group cursor-pointer">
      <div className="relative h-full bg-white border border-[#A8DADC] group-hover:border-[#E63946] rounded-2xl p-5 shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden">
        {/* Glow backdrop behind icon */}
        <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full bg-gradient-to-br ${skill.color} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-[#F1FAEE] border border-[#A8DADC]/60 flex items-center justify-center group-hover:bg-[#1D3557] transition-colors duration-300 shadow-sm">
              <Icon className={`w-6 h-6 ${skill.color.split(' ').pop()} group-hover:text-white transition-colors duration-300`} />
            </div>
            <span className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#F1FAEE] border border-[#A8DADC]/60 text-[#1D3557] rounded-full">
              {skill.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-[#1D3557] group-hover:text-[#E63946] transition-colors">
            {skill.name}
          </h3>

          <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">
            {skill.description}
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400 group-hover:text-[#457B9D] font-medium transition-colors">
          <span>Production Ready</span>
          <span className="text-[#E63946] font-bold">&rarr;</span>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  // Duplicate arrays to create seamless infinite scroll loop
  const row1Duplicated = [...row1Skills, ...row1Skills];
  const row2Duplicated = [...row2Skills, ...row2Skills];

  return (
    <div id="skills" className="pt-20 pb-24 bg-[#F8F9FA] text-black overflow-hidden relative">
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto mb-14 text-center">
        <span className="px-4 py-1.5 rounded-full bg-[#E63946]/10 text-[#E63946] text-xs font-bold uppercase tracking-wider">
          Continuous Skill Matrix
        </span>
        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1D3557] mt-3">
          Technical <span className="text-[#E63946]">Skills & Stack</span>
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Hover over any card to pause the continuous loop and explore my core competencies in programming, backend APIs, AI models, and cloud DevOps.
        </p>
      </div>

      {/* Infinite Scrolling Ticker Rows Container */}
      <div className="relative space-y-8">
        {/* Gradient edge masks for smooth fading at viewport boundaries */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#F8F9FA] to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#F8F9FA] to-transparent z-20" />

        {/* Row 1: Leftward Infinite Loop */}
        <div className="flex overflow-hidden py-2">
          <div className="animate-marquee-left pause-on-hover flex">
            {row1Duplicated.map((skill, index) => (
              <SkillCard key={`r1-${skill.id}-${index}`} skill={skill} />
            ))}
          </div>
        </div>

        {/* Row 2: Rightward Infinite Loop */}
        <div className="flex overflow-hidden py-2">
          <div className="animate-marquee-right pause-on-hover flex">
            {row2Duplicated.map((skill, index) => (
              <SkillCard key={`r2-${skill.id}-${index}`} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
