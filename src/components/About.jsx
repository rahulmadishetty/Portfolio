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
              alt="Rahul Madishetty"
              className="w-128 h-128 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Text & Socials */}
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="mb-4 leading-relaxed">
              Hey folks, I’m <strong>Rahul Madishetty</strong>—a passionate, results-driven Full-Stack Developer 
              with nearly a decade of experience delivering end-to-end software solutions across diverse industries. 
              Throughout my career, I’ve built scalable, intuitive, and high-performance applications that 
              solve real-world problems and drive meaningful business outcomes.
            </p>
            <p className="mb-4 leading-relaxed">
              I thrive in fast-paced, collaborative environments where ownership, quality, and continuous improvement
               are at the core. Whether it’s designing front-end architectures, optimizing backend systems, 
               or untangling complex production issues—I bring clarity, precision, and commitment to every line of code.
            </p>

            {/* Resume Download Button */}
            <a
              href="/Rahuls_Resume.pdf" // Replace with your actual resume path
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
                href="https://www.linkedin.com/in/rahul-madishetty/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size="1.5em" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/rahulmadishetty"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaGithub size="1.5em" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=100085437905122"
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
