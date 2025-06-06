import { useParams, useNavigate } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would typically come from a database or API
  const projectData = {
    id: 1,
    title: "Project Name",
    description:
      "Detailed description of the project. This is where you can provide more information about what the project does, the problems it solves, and its key features.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Feature 1: Description of the first major feature",
      "Feature 2: Description of the second major feature",
      "Feature 3: Description of the third major feature",
    ],
    challenges: [
      "Challenge 1: How you overcame it",
      "Challenge 2: How you overcame it",
      "Challenge 3: How you overcame it",
    ],
    images: ["/project1-1.jpg", "/project1-2.jpg", "/project1-3.jpg"],
    liveUrl: "https://project-demo.com",
    githubUrl: "https://github.com/username/project",
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center text-blue-400 hover:text-blue-300"
        >
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </button>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{projectData.title}</h1>
          <p className="text-xl text-gray-300">{projectData.description}</p>
        </div>

        {/* Project Images Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projectData.images.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <img
                src={image}
                alt={`Project screenshot ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Technologies Used */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {projectData.technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <ul className="space-y-4">
            {projectData.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <svg
                  className="w-6 h-6 text-blue-400 mr-2 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Challenges & Solutions */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-4">Challenges & Solutions</h2>
          <div className="space-y-6">
            {projectData.challenges.map((challenge, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-300">{challenge}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Links */}
        <div className="flex gap-4">
          <a
            href={projectData.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
          >
            Live Demo
          </a>
          <a
            href={projectData.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-semibold transition-colors"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
