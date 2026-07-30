import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projectList = [
  {
    id: 1,
    title: "ConnectHub – Real-Time Communication Platform",
    role: "Full-Stack Developer",
    year: "2026",
    image: "/images/connecthub.png",
    github: "https://github.com/VirajJayasiri/connecthub-springboot-react",
    live: "",
    technologies: ["Java", "Spring Boot", "Spring Security", "React", "MongoDB", "JWT", "WebSocket", "STOMP", "LiveKit", "Docker", "AWS EC2"],
    description: "A full-stack communication platform featuring secure authentication, user profiles, friend management, topic-based chat rooms, real-time messaging using WebSocket & STOMP, and LiveKit voice/video rooms containerized and deployed on AWS EC2."
  },
  {
    id: 2,
    title: "DevBuddy – Java CLI DevOps Automation Tool",
    role: "Java Developer",
    year: "2026",
    image: "/images/p2.jpg",
    github: "https://github.com/VirajJayasiri/devbuddy-java-cli-devops-automation-tool",
    live: "",
    technologies: ["Java 21", "Picocli", "Maven", "JUnit", "Git", "GitHub Actions"],
    description: "Command-line tool automating Maven project initialization, dev-environment checks, README generation, changelog management, versioning, and CI workflow setup with dry-run/force options."
  },
  {
    id: 3,
    title: "ExpenseWise – Smart Expense Tracker",
    role: "Full-Stack Developer",
    year: "2026",
    image: "/images/p3.jpg",
    github: "https://github.com/VirajJayasiri/expensewise-angular-firebase",
    live: "",
    technologies: ["Angular", "TypeScript", "Angular Material", "Firebase Auth", "Cloud Firestore", "AngularFire", "Chart.js", "Firebase Hosting"],
    description: "Responsive personal finance web application with secure auth, protected routes, CRUD transactions, monthly income/expense/balance calculations, category Chart.js visualizations, search/filter, and CSV export."
  },
  {
    id: 4,
    title: "NexAttend – AI-Powered Smart Attendance System",
    role: "AI & Backend Developer",
    year: "2025-2026",
    image: "/images/p4.jpg",
    github: "",
    live: "https://nexattend.com",
    technologies: ["Python", "FastAPI", "React", "OpenCV", "MTCNN", "DeepFace", "MongoDB"],
    description: "AI-powered attendance system identifying students from webcam streams. Features face detection, facial embedding generation, similarity matching pipeline, FastAPI endpoints, and React frontend."
  },
  {
    id: 5,
    title: "FastAPI JWT Authentication API & Media Upload",
    role: "Backend Developer",
    year: "2026",
    image: "/images/s1.jpg",
    github: "https://github.com/VirajJayasiri/fastapi-jwt-authentication-with-media-upload-app",
    live: "",
    technologies: ["Python", "FastAPI", "JWT", "SQL", "ImageKit", "Streamlit", "REST APIs"],
    description: "Secure RESTful backend with user registration, login, JWT auth, protected endpoints, input validation, post CRUD, SQL persistence, ImageKit uploads, and an interactive Streamlit UI."
  }
];

const Projects = () => {
  return (
    <div id="projects" className="pt-16 pb-20 bg-white">
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1D3557]">
          Featured Software & <br className="hidden sm:inline" />
          <span className="text-[#E63946]">Engineering Projects</span>
        </h2>
        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          A selection of real-world backend, full-stack, AI, and DevOps automation applications built with production-grade practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14">
          {projectList.map((project, idx) => (
            <div 
              key={project.id} 
              data-aos="fade-up" 
              data-aos-anchor-placement="top-center" 
              data-aos-delay={idx * 100} 
              className="group bg-[#F1FAEE] border border-[#A8DADC] rounded-2xl p-5 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="relative overflow-hidden rounded-xl bg-gray-100 aspect-video mb-5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    quality={90}
                  />
                  <div className="absolute top-3 left-3 bg-[#1D3557]/90 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
                    {project.role} &bull; {project.year}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#1D3557] group-hover:text-[#E63946] transition-colors">
                  {project.title}
                </h3>
                
                <p className="pt-3 text-sm text-gray-700 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2.5 py-1 text-xs font-medium bg-[#A8DADC]/40 text-[#1D3557] rounded-md border border-[#A8DADC]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4 mt-6 pt-4 border-t border-[#A8DADC]/60">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#1D3557] hover:text-[#E63946] transition-colors"
                  >
                    <FaGithub className="w-4 h-4 mr-1.5" />
                    <span>View Repository</span>
                  </a>
                )}
                {project.live && (
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-[#E63946] hover:text-[#1D3557] transition-colors"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5 mr-1.5" />
                    <span>Live Project</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
