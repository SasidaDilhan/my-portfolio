import myPhoto from "../assets/my photo.png";
import background from "../assets/background.jpg";
import { Download } from "lucide-react";
import MyCV from "../../public/cv/SasidaDilhan.pdf";

const Hero = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center">
        <img
          src={myPhoto}
          alt="Profile"
          className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-white"
        />
        <h1 className="text-5xl font-bold mb-4">Sasida Dilhan</h1>
        <p className="text-xl mb-8">Full Stack Developer</p>
        <div className="flex gap-4 justify-center">
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            Contact Me
          </a>
          <a
            href={MyCV}
            download="Sasinda_Dilhan_CV.pdf"
            className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-full text-lg font-semibold transition-colors"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
