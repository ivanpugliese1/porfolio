import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import Contact from './components/sections/Contact'
import BottomNav from './components/layout/BottomNav'

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-slate-200 min-h-screen font-sans">
      <Header />
      <main className="max-w-[1200px] mx-auto px-6 pb-24">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
      <BottomNav />
    </div>
  )
}