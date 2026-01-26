import Image from "next/image";

const Projects = () => {
  return (
    <div className="pt-16 pb-16 bg-white">
      <h1 className="text-center text-2xl sm:text-4xl xl:text-5xl font-bold text-black">
        A Small Selection of Recent <br />
        <span className="text-[#E63946]">Projects</span>
      </h1>

      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {/* Project 1 */}
        <div className="group">
          <div
            className="
              bg-[#F1FAEE]
              border border-black/50
              rounded-2xl
              p-3
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              transition-all duration-500
              group-hover:border-black
              group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              group-hover:scale-[1.02]
            "
          >
            <Image
              src="/images/p1.jpg"
              alt="Project Image 1"
              width={800}
              height={650}
              className="rounded-lg"
            />
          </div>

          {/* Text OUTSIDE Card (but inside wrapper) */}
          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-[#1D3557]">
            Modern Finance Dashboard UI
          </h1>
          <p className="pt-2 text-sm font-medium text-black/80">Apps · UI/UX</p>
        </div>

        {/* Project 2 */}
        <div className="group">
          <div
            className="
              bg-[#F1FAEE]
              border border-black/50
              rounded-2xl
              p-3
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              transition-all duration-500
              group-hover:border-black
              group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              group-hover:scale-[1.02]
            "
          >
            <Image
              src="/images/p2.jpg"
              alt="Project Image 2"
              width={800}
              height={650}
              className="rounded-lg"
            />
          </div>

          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-[#1D3557]">
            NexAttend – Smart Attendance System
          </h1>
          <p className="pt-2 text-sm font-medium text-black/80">
            Web App · AI · IoT
          </p>
        </div>

        {/* Project 3 */}
        <div className="group">
          <div
            className="
              bg-[#F1FAEE]
              border border-black/50
              rounded-2xl
              p-3
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              transition-all duration-500
              group-hover:border-black
              group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              group-hover:scale-[1.02]
            "
          >
            <Image
              src="/images/p3.jpg"
              alt="Project Image 3"
              width={800}
              height={650}
              className="rounded-lg"
            />
          </div>

          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-[#1D3557]">
            WorkzUp – Job Matching Platform
          </h1>
          <p className="pt-2 text-sm font-medium text-black/80">
            Full Stack · Security
          </p>
        </div>

        {/* Project 4 */}
        <div className="group">
          <div
            className="
              bg-[#F1FAEE]
              border border-black/50
              rounded-2xl
              p-3
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
              transition-all duration-500
              group-hover:border-black
              group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]
              group-hover:scale-[1.02]
            "
          >
            <Image
              src="/images/p4.jpg"
              alt="Project Image 4"
              width={800}
              height={650}
              className="rounded-lg"
            />
          </div>

          <h1 className="mt-4 text-xl sm:text-2xl font-semibold text-[#1D3557]">
            Portfolio Website (Next.js)
          </h1>
          <p className="pt-2 text-sm font-medium text-black/80">
            Next.js · Tailwind
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
