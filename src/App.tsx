import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

import HeroSection from "./sections/HeroSection"
import TokenSection from "./sections/TokenSection"
import { FeatureSection } from "./sections/FeatureSection"
import TutorialSection from "./sections/TutorialSection"

export default function App() {
  return (
    <div className="h-full min-h-screen bg-primary-black">
      <Navbar />
      <main className="hero-gradient">
        <div className="">
          <HeroSection />
          <TokenSection />
          <FeatureSection />
          <TutorialSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
