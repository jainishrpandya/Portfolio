import React from 'react'

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer Intern",
      company: "Helios Solutions, Vadodara",
      period: "Jan 2025 – Jul 2025",
      points: [
        "Developed BookCircle, a social platform for readers using the PERN stack.",
        "Built an AI-driven Sales Content Generation Tool using OpenAI API + RAG, moving it from POC to MVP.",
        "Strengthened DSA skills and improved proficiency in full-stack development (Java + MERN).",
        "Collaborated in an agile team using Jira for project tracking and management."
      ]
    }
  ];

  return (
    <section id='experience' className='section'>
      <div className='container'>
        <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
          <h2 className='headline-2 text-2xl font-bold text-white mb-6 md:text-3xl'>Experience</h2>

          {experiences.map(({ role, company, period, points }, index) => (
            <div key={index} className='mb-8'>
              <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
                <h3 className='text-xl font-semibold text-sky-400 md:text-2xl'>{role}</h3>
                <span className='text-zinc-400 text-sm md:text-base'>{period}</span>
              </div>
              <p className='text-zinc-300 mt-1 mb-3'>{company}</p>

              <ul className='list-disc list-inside space-y-2 text-zinc-400'>
                {points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
