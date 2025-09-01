import React from 'react'
import SkillCard from './SkillCard';

const Skills = () => {
  const skills = {
    Languages: [
      { imgSrc: '/images/java.svg', label: 'Java', desc: 'Backend & OOP' },
      { imgSrc: '/images/javascript.svg', label: 'JavaScript', desc: 'Frontend & Backend' },
      { imgSrc: '/images/typescript.svg', label: 'TypeScript', desc: 'Strongly Typed JS' },
      { imgSrc: '/images/sql.svg', label: 'SQL', desc: 'Database Queries' },
    ],
    Frontend: [
      { imgSrc: '/images/react.svg', label: 'React', desc: 'Frontend Framework' },
      { imgSrc: '/images/tailwindcss.svg', label: 'TailwindCSS', desc: 'UI Styling' },
    ],
    Backend: [
      { imgSrc: '/images/springboot.svg', label: 'Spring Boot', desc: 'Java Framework' },
      { imgSrc: '/images/nodejs.svg', label: 'Node.js', desc: 'Web Server' },
      { imgSrc: '/images/expressjs.svg', label: 'Express.js', desc: 'Node Framework' },
      { imgSrc: '/images/sequelize.svg', label: 'Sequelize ORM', desc: 'ORM for Node.js' },
    ],
    Databases: [
      { imgSrc: '/images/postgresql.svg', label: 'PostgreSQL', desc: 'Relational Database' },
      { imgSrc: '/images/mongodb.svg', label: 'MongoDB', desc: 'NoSQL Database' },
    ],
    AI: [
      { imgSrc: '/images/openai.svg', label: 'OpenAI API', desc: 'AI Integration' },
    ],
    ProblemSolving: [
      { imgSrc: '/images/leetcode.svg', label: 'DSA & LeetCode', desc: 'DS & Algorithms' },
    ],
    Tools_IDE: [
      { imgSrc: '/images/git.svg', label: 'Git & GitHub', desc: 'Version Control' },
      { imgSrc: '/images/postman.svg', label: 'Postman', desc: 'API Testing' },
      { imgSrc: '/images/maven.svg', label: 'Maven', desc: 'Java Dependency Manager' },
      { imgSrc: '/images/intellij.svg', label: 'IntelliJ IDEA', desc: 'Java IDE' },
      { imgSrc: '/images/vscode.svg', label: 'VS Code', desc: 'Code Editor' },
      { imgSrc: '/images/figma.svg', label: 'Figma', desc: 'Design Tool' },
      { imgSrc: '/images/builderio.svg', label: 'Builder.io', desc: 'Frontend CMS' },
    ]
  };

  return (
    <section id='skill' className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Tech Stack & Tools</h2>
        <p className='text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up'>
          A breakdown of the languages, frameworks, databases, and tools I use to build
          scalable, efficient, and user-focused applications.
        </p>

        {Object.entries(skills).map(([category, items], idx) => (
          <div key={idx} className="mb-10 reveal-up">
            <h3 className="text-xl font-semibold text-sky-400 mb-5">{category}</h3>
            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
              {items.map(({ imgSrc, label, desc }, i) => (
                <SkillCard
                  key={i}
                  imgSrc={imgSrc}
                  label={label}
                  desc={desc}
                  classes="reveal-up"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
