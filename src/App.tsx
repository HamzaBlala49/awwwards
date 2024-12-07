import About from "./components/About"
import Features from "./components/Features"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import StorySection from "./components/StorySection"

const App = () => {
  return (
   <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <StorySection/>
      <Contact/>
      <Footer/>

   </main>
  )
}

export default App