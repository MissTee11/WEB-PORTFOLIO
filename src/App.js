import NavigationBar from './Components/Navigation';
import HeroSection from './Components/HeroSection';
import MyProjects from './Components/MyProjects';
import MySkills from './Components/Skills';
import MyEducation from './Components/Education';
import Contact from './Components/Contact';
import About from './Components/About';

import './App.css';

function App() {
  return (
    <div className="App">
     <NavigationBar/>
     <HeroSection/>
     <About/>
     <MySkills/>
     <MyProjects/>
     <MyEducation/>
     <Contact/>
    </div>
  );
}

export default App;
