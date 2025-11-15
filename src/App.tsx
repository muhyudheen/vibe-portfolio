import './App.css'
import Header from './sections/Header'
import Home from './sections/Home'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
