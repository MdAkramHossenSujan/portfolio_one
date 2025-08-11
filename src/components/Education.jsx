import React from "react";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import college from "../assets/Morogram_of_RAJUK_Uttara_Model_College.svg.png";
import university from "../assets/chittagong-university-of-engineering-&-technology-(cuet).jpg";

const Education = () => {
  const educationData = [
    {
      img: college,
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Rajuk Uttara Model College",
      duration: "2019 - 2021",
    },
    {
      img: university,
      degree: "B.Sc. in Electrical & Electronic Engineering (EEE)",
      institution: "Chittagong University of Engineering & Technology (CUET)",
      duration: "2023 - Present",
    },
  ];

  return (
    <section
      className="py-12 transition-colors duration-300"
      id="education"
    >
      <div className="max-w-[1540px] mx-auto md:px-12 px-8">
        {/* Title */}
        <h2 className="text-3xl xl:text-5xl font-mono font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-2">
          <FaGraduationCap className="text-green-600 dark:text-green-500" />
          Education
        </h2>

        {/* Cards in grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-12 rounded-xl hover:shadow-lg transition duration-300"
            >
              {/* Circular Logo */}
              <div className="w-28 h-28 shadow-md shadow-cyan-300 dark:shadow-cyan-500 hover:shadow-md hover:scale-[1.02] rounded-full overflow-hidden border-4  text-cyan-600 dark:text-cyan-400">
                <img
                  src={edu.img}
                  alt={edu.institution}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Details */}
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {edu.institution}
                </p>
                <p className="text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2 mt-1">
                  <FaCalendarAlt className=" text-cyan-600 dark:text-cyan-400" />
                  {edu.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

