import { FaGithub, FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'
import useIntersectionObserver from '../hooks/useIntersectionObserver'

export default function About() {
  const isVisible = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section
      id="about"
      className={`snap-section bg-black text-white py-10 fade-in ${isVisible ? 'fade-in-visible' : ''}`}
    >
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold">About</h1>
        </header>

        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Photo */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <img
              src="/photo.jpg" // Replace with your actual photo path
              alt="Taleef Tamsal"
              className="w-128 h-128 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Text & Socials */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="mb-4 leading-relaxed">
              Hi, I’m <strong>Rahul Madishetty</strong>—a passionate software engineer and current MS candidate 
              in Computer Science at Purdue University. I earned my BS in Computer Science from LUMS, 
              with skills in full‐stack development, machine learning, data science, and the cloud. I love solving 
              complex problems, experimenting with new technologies, and collaborating to bring innovative 
              ideas to life.
            </p>
            <p className="mb-4 leading-relaxed">
              When I’m not coding, I’m researching the latest AI/ML breakthroughs, refining my 
              DevOps and Engineering skills, or exploring new models for fun. 
            </p>

            {/* Resume Download Button */}
            <a
              href="/Taleefs_Resume.pdf" // Replace with your actual resume path
              download
              className="inline-block bg-white text-black py-2 px-4 rounded-lg shadow
                         hover:bg-secondary transition-colors duration-300"
            >
              Download CV/Resume
            </a>

            {/* Social Icons Row */}
            <div className="flex space-x-4 mt-6">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ttamsal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size="1.5em" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Taleef7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub size="1.5em" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/taleef.tamsal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-secondary transition-colors duration-300"
              >
                <FaFacebook size="1.5em" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/taleeftamsal/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors duration-300"
              >
                <FaInstagram size="1.5em" />
              </a>

              {/* Email */}
              <a
                href="mailto:taleeftamsal@hotmail.com"
                className="text-gray-400 hover:text-blue-700 transition-colors duration-300"
              >
                <FaEnvelope size="1.5em" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
