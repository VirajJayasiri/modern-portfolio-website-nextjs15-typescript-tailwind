"use client";

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
  SiFigma
} from "react-icons/si";
import { FaJava, FaDatabase, FaCode, FaRobot, FaCloud, FaVials } from "react-icons/fa";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: FaCode,
    skills: [
      { name: "Java", icon: FaJava },
      { name: "Python", icon: SiPython },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Go", icon: SiGo },
      { name: "SQL", icon: FaDatabase }
    ]
  },
  {
    title: "Backend & REST APIs",
    icon: FaCode,
    skills: [
      { name: "Spring Boot", icon: SiSpringboot },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiNodedotjs },
      { name: "Firebase Auth", icon: SiFirebase },
      { name: "REST APIs & JWT", icon: FaCode }
    ]
  },
  {
    title: "Frontend Development",
    icon: FaCode,
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Angular", icon: SiAngular },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5 / CSS3", icon: FaCode },
      { name: "Chart.js", icon: FaCode }
    ]
  },
  {
    title: "Databases & Storage",
    icon: FaDatabase,
    skills: [
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Cloud Firestore", icon: SiFirebase },
      { name: "Relational DB Design", icon: FaDatabase }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "AWS EC2", icon: SiAmazonwebservices },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Firebase Hosting", icon: SiFirebase },
      { name: "Maven & Git", icon: FaCode }
    ]
  },
  {
    title: "AI & Machine Learning",
    icon: FaRobot,
    skills: [
      { name: "OpenCV", icon: SiOpencv },
      { name: "MTCNN & DeepFace", icon: FaRobot },
      { name: "scikit-learn", icon: SiScikitlearn },
      { name: "NumPy & Pandas", icon: FaRobot }
    ]
  },
  {
    title: "Testing & Tools",
    icon: FaVials,
    skills: [
      { name: "JUnit / Jasmine / Karma", icon: FaVials },
      { name: "Postman", icon: SiPostman },
      { name: "Streamlit", icon: FaCode },
      { name: "Figma", icon: SiFigma }
    ]
  }
];

const Skills = () => {
  return (
    <div id="skills" className="pt-16 pb-20 bg-[#F8F9FA] text-black">
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1D3557]">
          Technical <span className="text-[#E63946]">Skills & Stack</span>
        </h2>
        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Proven expertise across backend microservices, full-stack frameworks, computer vision algorithms, and cloud automation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {skillCategories.map((category, idx) => {
            const CategoryIcon = category.icon;
            return (
              <div
                key={category.title}
                data-aos="fade-up"
                data-aos-delay={idx * 75}
                className="bg-white border border-[#A8DADC] rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-5 pb-3 border-b border-gray-100">
                    <div className="w-10 h-10 bg-[#457B9D]/10 rounded-lg flex items-center justify-center">
                      <CategoryIcon className="w-5 h-5 text-[#1D3557]" />
                    </div>
                    <h3 className="text-lg font-bold text-[#1D3557]">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      return (
                        <div
                          key={skill.name}
                          className="flex items-center space-x-2 bg-[#F1FAEE] border border-[#A8DADC]/60 hover:border-[#457B9D] px-3 py-1.5 rounded-lg text-xs font-semibold text-[#1D3557] transition-all hover:bg-[#A8DADC]/30"
                        >
                          <SkillIcon className="w-4 h-4 text-[#E63946]" />
                          <span>{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
