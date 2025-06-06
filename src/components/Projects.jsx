import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import project1 from "../assets/projects/project1.png";
import project2 from "../assets/projects/project2.png";
import project3 from "../assets/projects/project3.jpeg";

const projects = [
  {
    id: 1,
    title: "Pet Care",
    description:
      "Monito is a modern e-commerce platform specializing in pet care products and services. The platform provides a comprehensive solution for pet owners to shop for pet supplies, learn about pet care, and connect with trusted sellers in the pet industry.",
    image: project1,
    tags: ["React", "TailwindCSS", "Zustand", "Swiper"],
    demoUrl: "#",
    githubUrl:
      "https://github.com/SasidaDilhan/Monito-Pet-Shop/tree/main/monito",
  },
  {
    id: 2,
    title: "Fit-Fusion",
    description:
      "FitFusion is a modern, full-stack fitness social platform that combines workout tracking, meal planning, and social networking features. Built with React and integrated with Firebase, it provides a complete solution for fitness enthusiasts to track their progress, share their journey, and connect with others.",
    image: project2,
    tags: [
      "React",
      "Material Tailwind",
      "React Slick",
      "TailwindCSS",
      "Firebase",
      " React Hot Toast ",
    ],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce platform specialized in computer hardware and accessories, built with modern web technologies and featuring a comprehensive management system.",
    image: project3,
    tags: ["React", "Node.js", "MongoDB ", "Tailwind ", "JWT"],
    demoUrl: "#",
    githubUrl: "",
  },
];

export const ProjectsSection = () => {
  const [ref, isVisible] = useScrollAnimation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.h2
            variants={projectVariants}
            className="text-3xl md:text-4xl font-bold mb-4 text-center"
          >
            Featured <span className="text-primary"> Projects </span>
          </motion.h2>

          <motion.p
            variants={projectVariants}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, key) => (
              <motion.div
                key={key}
                variants={projectVariants}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-xl font-semibold mb-1">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={projectVariants} className="text-center mt-12">
            <a
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              target="_blank"
              href="https://github.com/SasidaDilhan"
            >
              Check My Github <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
