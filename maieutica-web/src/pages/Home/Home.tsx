import React from 'react'
import { JobCard } from '../../components/JobCard/JobCard'


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <JobCard
        title="Prof. bilíngue | Ciências naturais"
        description="Et purus duis sollicitudin dignissim habitant..."
        location="São Paulo"
        area="Ciências"
        salary="R$ 10.000,00"
        contractingRegime="CLT"
      />
      <JobCard
        title="Prof. bilíngue | Ciências naturais"
        description="Et purus duis sollicitudin dignissim habitant..."
        location="São Paulo"
        area="Ciências"
        salary="R$ 10.000,00"
        contractingRegime="CLT"
      />
    </div>
  )
}
