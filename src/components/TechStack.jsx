import { 
    FaReact, FaAngular, FaNodeJs, FaDocker, FaGit, FaAws, FaLinux, FaQuestionCircle, FaTools, FaGithub 
  } from "react-icons/fa"
  import { 
    SiNextdotjs, SiJavascript, SiTypescript, SiTailwindcss, SiRedux, SiGraphql, SiExpress, 
    SiPython, SiDjango, SiPostgresql, SiMongodb, SiNginx, 
    SiPostman, SiFigma, SiJest, SiVercel , SiDotnet
  } from "react-icons/si"
  import { TbSql } from "react-icons/tb";
  import { VscAzure } from "react-icons/vsc";

  const skillIcons = {
    "React": FaReact,
    "Angular": FaAngular,
    "Next.js": SiNextdotjs,
    "Javascript": SiJavascript,
    "TypeScript": SiTypescript,
    "Redux": SiRedux,
    "GraphQL": SiGraphql,
  
    "Node.js": FaNodeJs,
    "Express": SiExpress,
    "dotNet": SiDotnet,
    "Python": SiPython,
    "Django": SiDjango,
    "SQLServer": TbSql,
    "PostgreSQL": SiPostgresql,
    "MongoDB": SiMongodb,
  
    
    "AWS": FaAws,
    "Azure": VscAzure,
    "CI/CD": FaTools, // Or pick another icon you prefer
    "Git": FaGit,
    "Nginx": SiNginx,
    "Docker": FaDocker,
  
    "Postman": SiPostman,
    "Figma": SiFigma,
    "Jest": SiJest,
    "GitHub": FaGithub,
  }
  
  // Example data
  const technologies = [
    {
      category: "Frontend",
      skills: ["React", "Angular", "Next.js", "Javascript", "TypeScript", "Redux", "Jest"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "dotNet", "GraphQL", "Python", "Django", "SQLServer", "PostgreSQL", "MongoDB"],
    },
    {
      category: "DevOps",
      skills: [ "AWS", "Azure", "CI/CD", "Git", "Nginx","Docker"],
    },
    {
      category: "Tools",
      skills: ["GitHub", "Postman", "Figma"],
    },
  ]
  
  export default function TechStack() {
    return (
      <section id="tech-stack" className="py-16 bg-accentlightest text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Tech Stack</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {technologies.map((tech) => (
              <div 
                key={tech.category}
                className="p-6 bg-neutral-300 rounded-lg shadow hover:shadow-xl transition-shadow text-center"
              >
                <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
                
                {/* Grid for icons (up to 5 per row) */}
                <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-4 place-items-center">
                  {tech.skills.map((skill) => {
                    const IconComponent = skillIcons[skill] || FaQuestionCircle
                    return (
                      <span
                        key={skill}
                        title={skill} // Shows a tooltip with the skill name on hover
                        className="flex items-center justify-center 
                                   w-20 h-20 rounded-full 
                                   bg-accentlight text-black 
                                   ring-1 ring-inset ring-black/70 
                                   hover:bg-accent transition-colors 
                                   cursor-pointer"
                      >
                        <IconComponent className="w-12 h-12" />
                      </span>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  