import React from 'react'
import HomeSection from '../components/templates/HomeSection'
import SolutionSection from '../components/templates/SolutionSection'
import SimpleWorksSection from '../components/templates/SimpleWorksSection'
import SimpleWorksBoxSection from '../components/templates/SimpleWorksBoxSection'
import CompaniesSection from '../components/templates/CompaniesSection'

function HomePage() {
  return (
    <div>
      <HomeSection />
      <SolutionSection />
      <SimpleWorksSection />
      <SimpleWorksBoxSection />
      <CompaniesSection />
    </div>
  )
}

export default HomePage