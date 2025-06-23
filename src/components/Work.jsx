/* eslint-disable react/prop-types */
import timelineElements from '/public/timelineElements'
import schoolIcon from '/school.svg'
import workIcon from '/work.svg'

function WorkCard({ element, isLeft }) {
  return (
    <div 
      className={`
        mb-12 relative w-full
        flex flex-col sm:flex-row 
        ${isLeft ? 'sm:flex-row-reverse' : ''}
        items-center
      `}
    >
      {/* Card Content */}
      <div className="w-full sm:w-6/12 m-1 p-4">
      <a
        href={element.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full"
      >
        <div className="
          group relative bg-neutral-300 text-black shadow-lg rounded-lg overflow-hidden 
          transform transition-all duration-300 hover:scale-105 hover:shadow-2xl
        ">
          <div className="p-4 whitespace-normal break-words">
            <div className="flex items-center mb-2">
              <img
                src={element.icon === 'school' ? schoolIcon : workIcon}
                alt="icon"
                className="w-10 p-1 rounded-lg invert"
              />
              <div className="ml-2 text-xl font-bold">{element.title}</div>
            </div>
            <div className="text-gray-900 mb-4">{element.location}</div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {element.description}
            </p>

            {/* Tech badges */}
            <div className="flex flex-wrap mb-4">
              {element.tech.map((tech, index) => (
                <span
                  key={index}
                  className="bg-accentlight text-black rounded-lg px-2 py-1 text-xs m-1"
                >
                  {tech}
                </span>
              ))}
            </div>


          </div>
        </div>
        </a>
      </div>

      {/* Timeline connector (only on sm+ screens) */}
      <div className="hidden sm:flex sm:w-1/16 items-center justify-center relative">
        <div className="bg-gray-600 h-full w-0.5 absolute left-1/2 transform -translate-x-1/2"></div>
      </div>

      {/* Date on the opposite side (sm+ screens) */}
      <div
        className={`
          w-full sm:w-5/12 p-4 text-center
          sm:text-${isLeft ? 'right' : 'left'} 
          flex items-center
          ${isLeft ? 'sm:justify-end' : 'sm:justify-start'}
        `}
      >
        <div
          className="inline-block bg-neutral-300 px-4 py-1 rounded-md text-black border border-gray-600"
          style={{
            marginLeft: isLeft ? '0.5rem' : '0',
            marginRight: isLeft ? '0' : '0.5rem'
          }}
        >
          {element.date}
        </div>
      </div>
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="bg-accentlightest text-black py-16">
      <div className="flex flex-col justify-center items-center text-base pb-8 sm:text-lg">
        <h2 className="text-4xl font-bold mb-8 mt-8">Experience</h2>
        
        <div className="relative w-full sm:w-3/4 lg:w-2/3">
          {/* Center vertical line on sm+ screens */}
          <div className="absolute w-0.5 h-full bg-gray-600 left-1/2 transform -translate-x-1/2 hidden sm:block"></div>
          
          {timelineElements.map((element, index) => (
            <WorkCard 
              key={element.id} 
              element={element} 
              isLeft={index % 2 === 0} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}
