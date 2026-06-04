import Hero from './components/Hero'
import Letter from './components/Letter'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Details from './components/Details'
import FinalMessage from './components/FinalMessage'

export default function App() {
  return (
    <main className="bg-cream min-h-screen">
      <Hero />
      <Letter />
      <Timeline />
      <Gallery />
      <Details />
      <FinalMessage />
    </main>
  )
}