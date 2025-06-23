/* eslint-disable react/prop-types */
import useIntersectionObserver from '../hooks/useIntersectionObserver'

// Example project data
const projectData = [
  {
    image: '/Project1.png',
    title: 'Employee Attendance and Leave Management System',
    description:
      'Created an efficient system for tracking employee attendance and leave, addressing the need for automation and accuracy',
    techLogos: ['/mongodb.png', '/expressjs.png', '/react.png', '/nodejs.png'],
    githubLink: 'https://github.com/Haris-Asghar/CS-360-Project',
  },
  {
    image: '/Project2.png',
    title: 'Authorship Attribution using Twitter Data',
    description:
      'Authorship attribution of thousands of tweets from influential Twitter handles, using a variety of models in the process',
    techLogos: ['/pandas.png', '/numpy.png'],
    githubLink: 'https://github.com/Taleef7/Authorship-Attribution',
  },
  // Add more projects as needed
]

function ProjectCard({ image, title, description, techLogos, githubLink }) {
  return (
    <div className="bg-neutral-800 rounded-md p-6 flex flex-col justify-between h-full hover:shadow-xl transition-shadow">
      {/* Top Section: Image + Title/Description */}
      <div>
        <div className="relative aspect-video mb-4">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full rounded-md"
          />
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-300 mb-4">{description}</p>
      </div>

      {/* Bottom Section: Tech Logos + GitHub Button */}
      <div>
        <div className="flex space-x-2 mb-4">
          {techLogos.map((logo, index) => (
            <img key={index} src={logo} alt="Tech logo" className="w-8 h-8" />
          ))}
        </div>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-md hover:bg-gray-600 transition-colors"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.111.793-.26.793-.577v-2.17c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.335-1.757-1.335-1.757-1.091-.746.082-.73.082-.73 1.205.08 1.84 1.235 1.84 1.235 1.07 1.834 2.807 1.304 3.492.998.108-.774.417-1.304.76-1.604-2.665-.304-5.466-1.333-5.466-5.93 0-1.31.467-2.38 1.235-3.22-.124-.305-.535-1.53.117-3.18 0 0 1.008-.322 3.3 1.23a11.505 11.505 0 0 1 3.006-.404c1.02.005 2.047.138 3.005.403 2.29-1.552 3.298-1.23 3.298-1.23.654 1.65.243 2.874.12 3.18.77.84 1.234 1.91 1.234 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.82 1.1.82 2.22v3.293c0 .32.192.69.8.576A12.004 12.004 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const isVisible = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section
      id="projects"
      className={`bg-black py-16 fade-in ${
        isVisible ? 'fade-in-visible' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white">Projects</h1>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              techLogos={project.techLogos}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
