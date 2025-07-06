import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLoaderData, useParams } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGithub,
  FaPython,
  FaDatabase,
  FaCheckCircle
} from 'react-icons/fa';
import {
  SiTypescript,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
  SiRedux,
  SiVite,
  SiReactrouter,
  SiFramer,
  SiAxios,
  SiJsonwebtokens,
} from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

const techIcons = {
  React: <FaReact />,
  'React.js': <FaReact />,
  'React Router': <SiReactrouter />,
  Vite: <SiVite />,
  'Tailwind CSS': <SiTailwindcss />,
  Tailwind: <SiTailwindcss />,
  HTML: <FaHtml5 />,
  CSS: <FaCss3Alt />,
  JavaScript: <FaJsSquare />,
  TypeScript: <SiTypescript />,
  NodeJS: <FaNodeJs />,
  'Node.js': <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  'Express.js': <SiExpress />,
  Firebase: <SiFirebase />,
  'Firebase Auth (JWT)': <SiFirebase />,
  JWT: <SiJsonwebtokens />,
  Axios: <SiAxios />,
  Redux: <SiRedux />,
  GitHub: <FaGithub />,
  Python: <FaPython />,
  Database: <FaDatabase />,
  'Framer Motion': <SiFramer />,
};

const normalizeTech = (tech) =>
  tech.replace(/\.js$/i, '').replace(/[-_\s]/g, '').toLowerCase();

const ProjectDetails = () => {
  const projects = useLoaderData();
  const { id } = useParams();
  const numId = Number(id);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (projects && projects.length) {
      const found = projects.find((p) => Number(p.id) === numId);
      setProject(found || null);
    }
  }, [projects, numId]);

  useEffect(() => {
    if (project?.name) {
      document.title = `Details of ${project.name}`;
    }
  }, [project]);

  if (!project) {
    return (
      <section className="py-28 text-gray-900 dark:text-white">
        <div className="max-w-[1540px] mx-auto font-mono">
          <p>Loading project details...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 md:px-10 transition-colors duration-500">
      <div className="max-w-[1540px] mx-auto space-y-10 font-mono">

        {/* Images */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          className="rounded-xl"
        >
          {(project.images ? Object.values(project.images) : []).map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`${project.name} screenshot ${i + 1}`}
                className="rounded-xl shadow-md object-cover w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Title & Description */}
        <div className="space-y-4">
          <h2 className="text-green-700 dark:text-green-400 text-3xl md:text-4xl font-semibold">
            {project.name}
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg">
            {project.shortDescription}
          </p>
        </div>

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border-t border-gray-300 dark:border-gray-600 pt-6">
          <div>
            <h3 className="text-red-600 dark:text-red-400 text-xl font-semibold mb-2">Project Info</h3>
            <p><span className="font-semibold">Completion Time:</span> {project.info?.timeTaken ?? 'N/A'}</p>
            <p className="mt-2 font-semibold">Technologies:</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {(project.info?.technologies ?? []).map((tech, index) => {
                const techIcon = Object.entries(techIcons).find(
                  ([key]) => normalizeTech(key) === normalizeTech(tech)
                )?.[1];

                return (
                  <span
                    key={index}
                    className="border border-gray-400 dark:border-cyan-400 text-xs px-2 py-1 rounded-full text-gray-800 dark:text-cyan-300 inline-flex items-center gap-1"
                  >
                    {techIcon || <FaCheckCircle className="text-xs" />} {tech}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-red-600 dark:text-red-400 text-xl font-semibold mb-2">Key Features</h3>
            <ul className="list-disc pl-4 space-y-1 text-sm text-gray-800 dark:text-gray-300">
              {(project.featureDetails ? Object.values(project.featureDetails) : []).map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 hover:underline flex items-center gap-1"
            >
              <FiExternalLink /> Live Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              <FaGithub /> GitHub Client
            </a>
          )}
          {project.githubServer && (
            <a
              href={project.githubServer}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-600 dark:text-cyan-400 hover:underline flex items-center gap-1"
            >
              <FaGithub /> GitHub Server
            </a>
          )}
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;



