import React from 'react'



const About = () => {

    const aboutItems = [
        {
          label: 'Project done',
          number: 5
        },
        {
          label: 'Months of experience',
          number: 8
        }
      ];


    return (
    <section
        id='about'
        className='section'
    >
        <div className='container'>
            <div className='bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up'>
                <p className='text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[80ch]'>
                Welcome! I&apos;m Jainish, I&apos;m a Full Stack Developer with hands-on experience in Java (Spring Boot) and the PERN stack, passionate about building scalable, user-focused applications. During my internship at Helios Solutions, I developed real-world projects like an AI-driven sales content tool and a social platform for readers, strengthening both my technical and problem-solving skills.

                <br /><br />I enjoy blending backend engineering, modern frontend design, and AI/ML concepts to create solutions that are not just functional but impactful. With a foundation in Data Structures & Algorithms, and a keen interest in AI-driven development, I&apos;m eager to keep learning and contribute to challenging projects.
                </p>

                <div className='flex flex-wrap items-center gap-4 md:gap-7'>
                    {
                      aboutItems.map(({ label, number }, key) => (
                        <div key={key}>
                            <div className='flex items-center md:mb-2'>
                                <span className='text-2xl font-bold md:text-4xl'>{number}</span>
                                <span className='text-sky-400 font-semibold md:text-3xl'>+</span>
                            </div>

                            <p className='text-sm text-zinc-400'>{label}</p>
                        </div>
                      ))  
                    }


                    <img 
                    src="/images/logo.svg" 
                    alt="logo"
                    width={30}
                    height={30}
                    className='ml-auto md:w-[40px] md:h-[40px]'
                    />
                </div>
            </div>
        </div>

    </section>
  )
}

export default About