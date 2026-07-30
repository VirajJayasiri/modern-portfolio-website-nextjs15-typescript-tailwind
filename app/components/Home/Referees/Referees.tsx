import React from "react";
import { BiEnvelope, BiPhone, BiUserCheck } from "react-icons/bi";
import { HiAcademicCap } from "react-icons/hi2";

const refereesList = [
  {
    id: 1,
    name: "Mr. E. M. Indrajith Ekanayake",
    title: "Lecturer, Faculty of Computing",
    institution: "Informatics Institute of Technology (IIT), Sri Lanka",
    email: "indrajith.e@iit.ac.lk",
    phone: "+94 74 298 3765"
  },
  {
    id: 2,
    name: "Ms. W. P. Jayani Warnakula",
    title: "Assistant Lecturer, Kurunegala Centre",
    institution: "Informatics Institute of Technology (IIT), Sri Lanka",
    email: "jayani.w@iit.ac.lk",
    phone: "+94 71 982 6581"
  }
];

const Referees = () => {
  return (
    <div id="referees" className="pt-16 pb-20 bg-[#F8F9FA] text-black">
      <div className="w-[90%] sm:w-[85%] lg:w-[75%] mx-auto">
        <h2 className="text-center text-3xl sm:text-4xl xl:text-5xl font-bold text-[#1D3557]">
          Academic & Professional <span className="text-[#E63946]">Referees</span>
        </h2>
        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
          Faculty members available to provide academic recommendations and attest to technical capabilities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14">
          {refereesList.map((referee, idx) => (
            <div
              key={referee.id}
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
              className="bg-white border border-[#A8DADC] rounded-2xl p-7 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center space-x-4 mb-5">
                  <div className="w-14 h-14 bg-[#1D3557] text-white rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <BiUserCheck className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1D3557]">
                      {referee.name}
                    </h3>
                    <p className="text-[#E63946] font-medium text-sm">
                      {referee.title}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-gray-600 text-xs sm:text-sm mb-6 pb-4 border-b border-gray-100">
                  <HiAcademicCap className="w-5 h-5 text-[#457B9D] flex-shrink-0" />
                  <span>{referee.institution}</span>
                </div>

                <div className="space-y-3 text-sm">
                  <a
                    href={`mailto:${referee.email}`}
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#E63946] transition-colors"
                  >
                    <BiEnvelope className="w-5 h-5 text-[#457B9D]" />
                    <span className="font-medium">{referee.email}</span>
                  </a>

                  <a
                    href={`tel:${referee.phone.replace(/\s+/g, '')}`}
                    className="flex items-center space-x-3 text-gray-700 hover:text-[#E63946] transition-colors"
                  >
                    <BiPhone className="w-5 h-5 text-[#457B9D]" />
                    <span className="font-medium">{referee.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Referees;
