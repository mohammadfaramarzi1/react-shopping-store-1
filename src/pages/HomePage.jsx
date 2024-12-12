import React from 'react'
import HomeSection from '../components/templates/HomeSection'
import SolutionSection from '../components/templates/SolutionSection'
import SimpleWorksSection from '../components/templates/SimpleWorksSection'
import SimpleWorksBoxSection from '../components/templates/SimpleWorksBoxSection'

function HomePage() {
  return (
    <div>
      <HomeSection />
      <SolutionSection />
      <SimpleWorksSection />
      <SimpleWorksBoxSection />
    </div>
  )
}

export default HomePage