import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';

const About = React.lazy(() => import('./components/About'));
// const Projects = React.lazy(() => import('./components/Projects'));
const Work = React.lazy(() => import('./components/Work'));
const Contact = React.lazy(() => import('./components/Contact'));
const TechStack = React.lazy(() => import('./components/TechStack'));
const Divider = React.lazy(() => import('./components/Divider'));


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
        <Navbar />
        <Home />
        <Divider />
        <Suspense fallback={<div>Loading...</div>}>
          <About />
          <Divider />
          {/* <Projects /> */}
          <Divider />
          <Work defaultColor="bg-cyan-500" />
          <Divider />
          <TechStack />
          <Divider />
          <Contact />
        </Suspense>
    </div>
  )
}

export default App
