import React from 'react'
import ProjectCard from './ProjectCard';

const Work = () => {

    const works = [
        {
          imgSrc: '/images/Project-inventory.png',
          title: 'Inventory Management API',
          tags: ['Spring Boot', 'PostgreSQL', 'JWT'],
          projectLink: 'https://github.com/jainishrpandya/Inventory-Management-Springboot-.git'
        },
        {
          imgSrc: '/images/Project-sales.png',
          title: 'Sales Content Generation Tool (Internship - Confidential)',
          tags: ['AI', 'React', 'Node.js', 'PostgreSQL'],
        },
        {
          imgSrc: '/images/Project-mcp.png',
          title: 'MCP Trading Server',
          tags: ['Zerodha API', 'Claude AI', 'Node.js', 'MCP'],
          projectLink: 'https://github.com/jainishrpandya/Zerodha-MCP'
        },
        {
          imgSrc: '/images/Project-bookcircle.png',
          title: 'BookCircle – Social Platform',
          tags: ['PERN Stack', 'JWT', 'Responsive'],
          projectLink: 'https://github.com/jainishrpandya/Bookcircle-Decentralized-Book-Sharing-Platform'
        },
        {
          imgSrc: '/images/Project-chat.png',
          title: 'Real-Time Chat Application',
          tags: ['MERN', 'Socket.io', 'Authentication'],
          projectLink: 'https://github.com/jainishrpandya/DOTBOX-Web-based-Chat-Application'
        }
      ];
      

    return (
        <section
            id='work'
            className="section">
            <div className="container">
                <h2 className="headline-2 mb-8 reveal-up">
                    My Portfolio Highlights
                </h2>

                <div className='grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]'>
                    {
                        works.map(({ imgSrc, title, tags, projectLink }, key) => (

                            <ProjectCard
                                key={key}
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                projectLink={projectLink}
                                classes="reveal-up"
                            />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Work