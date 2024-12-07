import About from "./components/About"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Story from "./components/story"

const App = () => {
  return (
   <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story/>
      <Contact/>
      <Footer/>

   </main>
  )
}

export default App