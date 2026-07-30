import React from "react";
import { FaTrophy, FaCertificate, FaAward, FaExternalLinkAlt, FaUsers, FaHandsHelping } from "react-icons/fa";

const achievements = [
  {
    id: 1,
    title: "1st Place at IIT | 4th Place at University of Westminster",
    role: "Team Lead – Problem-Solving International Hackathon",
    year: "2026",
    icon: FaTrophy,
    description: "Led problem analysis, task coordination, solution architecture, and the final presentation within the tight competition deadline to achieve top honors."
  },
  {
    id: 2,
    title: "Cutting Edge '25 Volunteer",
    role: "Event Volunteer",
    year: "2025",
    icon: FaHandsHelping,
    description: "Supported event coordination, participant assistance, and on-site operational activities to ensure successful event delivery."
  },
  {
    id: 3,
    title: "Algorand Foundation Blockchain Workshop",
    role: "Workshop Participant",
    year: "2025",
    icon: FaUsers,
    description: "Gained practical exposure to blockchain architecture, smart contracts, and decentralized application (dApp) development at IIT."
  }
];

const certifications = [
  {
    id: 1,
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft (University Cloud AI Challenge 2025)",
    year: "2025",
    icon: FaAward,
    credential: "https://www.credly.com/badges/d87b57ad-e0c9-4a59-9205-0104d801c23d"
  },
  {
    id: 2,
    title: "Cambridge Linguaskill English Proficiency Certificate",
    issuer: "University of Cambridge, UK (IIT Professional Development Unit)",
    year: "2025",
    icon: FaCertificate,
    credential: ""
  },
  {
    id: 3,
    title: "GitHub Actions Learning – Beginner Completion Badge",
    issuer: "GitHub Actions Learning Community Project",
    year: "2026",
    icon: FaAward,
    credential: "https://github.com/nisalgunawardhana/github-actions-learning/issues/218"
  }
];

const Achievements = () => {
  return (
    <div id="achievements" className="pt-20 pb-20 bg-white text-black">
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1D3557]">
          Achievements & <span className="text-[#E63946]">Certifications</span>
        </h2>
        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Recognitions, hackathon achievements, leadership roles, and industry-recognized certifications.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          {/* Hackathons & Leadership */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <FaTrophy className="w-7 h-7 text-[#E63946]" />
              <h3 className="text-2xl font-bold text-[#1D3557]">
                Leadership & Hackathons
              </h3>
            </div>

            <div className="space-y-6">
              {achievements.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    data-aos="fade-right"
                    data-aos-delay={i * 100}
                    className="bg-[#F1FAEE] border border-[#A8DADC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-[#E63946]/10 text-[#E63946] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Icon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#E63946] uppercase tracking-wider">
                            {item.role} &bull; {item.year}
                          </span>
                          <h4 className="text-lg font-bold text-[#1D3557] mt-1">
                            {item.title}
                          </h4>
                          <p className="text-gray-700 text-sm mt-2 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Certifications & Badges */}
          <div>
            <div className="flex items-center space-x-3 mb-8">
              <FaCertificate className="w-7 h-7 text-[#457B9D]" />
              <h3 className="text-2xl font-bold text-[#1D3557]">
                Certifications & Badges
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    data-aos="fade-left"
                    data-aos-delay={i * 100}
                    className="bg-[#F1FAEE] border border-[#A8DADC] rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-[#457B9D]/10 text-[#457B9D] rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-bold text-[#457B9D] uppercase tracking-wider">
                          Verified &bull; {item.year}
                        </span>
                        <h4 className="text-lg font-bold text-[#1D3557] mt-1">
                          {item.title}
                        </h4>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.issuer}
                        </p>

                        {item.credential && (
                          <a
                            href={item.credential}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center text-xs font-bold text-[#E63946] hover:text-[#1D3557] mt-3 transition-colors"
                          >
                            <span>Verify Credential</span>
                            <FaExternalLinkAlt className="w-3 h-3 ml-1.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
