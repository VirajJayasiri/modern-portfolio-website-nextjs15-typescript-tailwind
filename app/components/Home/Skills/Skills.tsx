"use client";

import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Tilt from "react-parallax-tilt";

const skills = [
  { name: "JavaScript", icon: SiJavascript, percentage: 89 },
  { name: "React.js", icon: SiReact, percentage: 92 },
  { name: "Next.js", icon: SiNextdotjs, percentage: 90 },
  { name: "Node.js", icon: SiNodedotjs, percentage: 88 },
  { name: "Tailwind CSS", icon: SiTailwindcss, percentage: 94 },
  { name: "TypeScript", icon: SiTypescript, percentage: 86 },
];

const Skills = () => {
  return (
    <div className="pt-16 pb-16 bg-white text-black">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold">
        My <span className="text-[#E63946]">Skills</span>
      </h1>

      <div className="mt-16 flex flex-wrap justify-center gap-10">
        {skills.map((skill,i) => {
          const Icon = skill.icon;

          return (
            <Tilt
              key={skill.name}
              scale={1.25}
              transitionSpeed={400}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.15}
              glareColor="#ffffff"
              glarePosition="all"
            >
              <div data-aos="flip-right" data-aos-anchor-placement="top-center" data-aos-delay="{i * 100}"
                className="
                  w-44 h-44
                  rounded-3xl
                  bg-[#1D3557]
                  border border-white/10
                  shadow-[0_16px_40px_rgba(0,0,0,0.18)]
                  flex flex-col items-center justify-center
                  transition-transform duration-400
                  hover:-translate-y-1
                "
              >
                <Icon className="text-5xl text-white/90 mb-4" />

                <div className="text-white font-bold text-2xl leading-none">
                  {skill.percentage}%
                </div>

                <div className="mt-2 text-[#A8DADC] font-medium">
                  {skill.name}
                </div>
              </div>
            </Tilt>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
