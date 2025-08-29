import { Code, Framer, Bot, Server, Rocket, Wind, Container, Coffee, Leaf, Cloud, Smartphone, BrainCircuit } from "lucide-react";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaJava, FaAws, FaAndroid, FaApple,FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiSpringboot, SiMongodb, SiPostgresql } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

export const TechStack = () => {
    const technologies = [
      { name: "React", icon: <FaReact size={48} /> },
      { name: "Next.js", icon: <SiNextdotjs size={48} /> },
      { name: "TypeScript", icon: <SiTypescript size={48} /> },
      { name: "JavaScript", icon: <SiJavascript size={48} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={48} /> },
      { name: "Node.js", icon: <FaNodeJs size={48} /> },
      { name: "Python", icon: <FaPython size={48} /> },
      { name: "Docker", icon: <FaDocker size={48} /> },
      { name: "Java", icon: <FaJava size={48} /> },
      { name: "Spring Boot", icon: <SiSpringboot size={48} /> },
      { name: "AWS", icon: <FaAws size={48} /> },
      { name: "Android", icon: <FaAndroid size={48} /> },
      { name: "iOS", icon: <FaApple size={48} /> },
      { name: "AI", icon: <GiArtificialIntelligence size={48} /> },
      { name: "MongoDB", icon: <SiMongodb size={48} /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={48} /> },
    ];

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Technologies We Use</h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">We leverage the best tools to build modern, scalable, and robust applications.</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4 lg:grid-cols-4">
          {technologies.map((tech) => (
            <div key={tech.name} className="flex flex-col items-center justify-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 transition-transform duration-300 hover:scale-110">
                {tech.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{tech.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};