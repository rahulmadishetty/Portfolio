import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Toggle the dropdown menu on mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="bg-white text-black fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Site Name (clickable) */}
        <div className="text-2xl font-bold">
          <a
            href="#home"
            className="hover:text-secondary transition duration-300 ease-in-out transform hover:scale-105"
          >
            Rahul Madishetty
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {/* You can replicate this link structure for each link */}
          <a
            href="#about"
            className="relative font-medium text-black hover:text-accent transition duration-300 
                       ease-in-out transform hover:scale-105 active:scale-95
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full 
                       after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 
                       after:transition-transform after:duration-300 after:origin-bottom-right 
                       hover:after:origin-bottom-left"
          >
            About
          </a>
          
          <a
            href="#work"
            className="relative font-medium text-black hover:text-accent transition duration-300 
                       ease-in-out transform hover:scale-105 active:scale-95
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full 
                       after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 
                       after:transition-transform after:duration-300 after:origin-bottom-right 
                       hover:after:origin-bottom-left"
          >
            Experience
          </a>
          <a
            href="#tech-stack"
            className="relative font-medium text-black hover:text-accent transition duration-300 
                       ease-in-out transform hover:scale-105 active:scale-95
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full 
                       after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 
                       after:transition-transform after:duration-300 after:origin-bottom-right 
                       hover:after:origin-bottom-left"
          >
            Tech
          </a>

          {/* <a
            href="#projects"
            className="relative font-medium text-black hover:text-accent transition duration-300 
                       ease-in-out transform hover:scale-105 active:scale-95
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full 
                       after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 
                       after:transition-transform after:duration-300 after:origin-bottom-right 
                       hover:after:origin-bottom-left"
          >
            Projects
          </a> */}
          
          <a
            href="#contact"
            className="relative font-medium text-black hover:text-accent transition duration-300 
                       ease-in-out transform hover:scale-105 active:scale-95
                       after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full 
                       after:h-0.5 after:bg-accent after:scale-x-0 hover:after:scale-x-100 
                       after:transition-transform after:duration-300 after:origin-bottom-right 
                       hover:after:origin-bottom-left"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md hover:bg-gray-800 focus:bg-gray-800 transition 
                       duration-300 ease-in-out transform hover:scale-105 active:scale-95"
          >
            {/* Hamburger Icon */}
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="miter" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Mobile Dropdown */}
          <div
            className={`
              absolute top-16 right-4 bg-black text-white border border-gray-700 
              rounded-md shadow-lg transform transition-all duration-300 ease-in-out 
              ${isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
            `}
          >
            <a
              href="#home"
              className="block px-4 py-2 hover:bg-gray-800 hover:text-secondary transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-4 py-2 hover:bg-gray-800 hover:text-secondary transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block px-4 py-2 hover:bg-gray-800 hover:text-secondary transition"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#work"
              className="block px-4 py-2 hover:bg-gray-800 hover:text-secondary transition"
              onClick={() => setIsOpen(false)}
            >
              Work
            </a>
            <a
              href="#tech-stack"
              className="block px-4 py-2 hover:bg-gray-800 hover:text-secondary transition"
              onClick={() => setIsOpen(false)}
            >
              Tech
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-gray-800 hover:text-secondary transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
