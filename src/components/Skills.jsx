import reactLogo from "../assets/react.png";
import nodeLogo from "../assets/node.png";
import mongoLogo from "../assets/mongo.png";
import jsLogo from "../assets/javascript.png";
import htmlLogo from "../assets/html.png";
import cssLogo from "../assets/css.png";
import tailwindLogo from "../assets/tailwind.png";
import firebaseLogo from "../assets/firebase.png";
import awsLogo from "../assets/aws.png";
import sqlLogo from "../assets/sql.png";

const Skills = () => {
  const skills = [
    { name: "React", logo: reactLogo },
    { name: "Node.js", logo: nodeLogo },
    { name: "MongoDB", logo: mongoLogo },
    { name: "JavaScript", logo: jsLogo },
    { name: "HTML", logo: htmlLogo },
    { name: "CSS", logo: cssLogo },
    { name: "Tailwind", logo: tailwindLogo },
    { name: "Firebase", logo: firebaseLogo },
    { name: "AWS", logo: awsLogo },
    { name: "SQL", logo: sqlLogo },
  ];

  return (
    <section className="py-20 px-4 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 mb-4"
              />
              <span className="text-lg font-semibold">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
