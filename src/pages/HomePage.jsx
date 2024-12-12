import React from 'react'
import HomeSection from '../components/templates/HomeSection'
import SolutionSection from '../components/templates/SolutionSection'
import SimpleWorksSection from '../components/templates/SimpleWorksSection'

function HomePage() {
  return (
    <div>
      <HomeSection />
      <SolutionSection />
      <SimpleWorksSection />
    </div>
  )
}

export default HomePage