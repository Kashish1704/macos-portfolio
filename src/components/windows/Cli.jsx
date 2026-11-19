
import React from 'react'
import MacWindow from './MacWindow'
import Terminal from 'react-console-emulator'
import "./cli.scss"

const Cli = ({ windowName, setWindowsState }) => {
    const commands = {
        about: {
            description: 'About me',
            usage: 'about',
            fn: () => `Hi, I am Kashish Golhani, a Computer Science Engineering student at Lakshmi Narain College of Technology Excellence, Bhopal.

I am interested in software development, problem solving, web development and cybersecurity. I enjoy learning new technologies and building projects.`
        },

        skills: {
            description: 'List technical skills',
            usage: 'skills',
            fn: () => `Programming: Java
Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS
Core CS: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks
Tools: Git, GitHub, VS Code
Interests: Web Development, Cybersecurity`
        },

        projects: {
            description: 'View my projects',
            usage: 'projects',
            fn: () => `1. Flick the Show
   Movie ticket booking platform with movie browsing, trailers, seat selection, booking and personalized dashboard.

2. macOS Portfolio
   Personal portfolio inspired by the macOS desktop interface.

3. SkillSwap
   A platform designed to help users share and exchange skills.`
        },

        education: {
            description: 'View my education',
            usage: 'education',
            fn: () => `B.Tech - Computer Science Engineering
Lakshmi Narain College of Technology Excellence, Bhopal
Duration: 2023 - 2027
CGPA: 8.23`
        },

        experience: {
            description: 'View my experience',
            usage: 'experience',
            fn: () => `Currently pursuing B.Tech in Computer Science Engineering (2023 - 2027).

Focused on:
- Learning Java and Data Structures & Algorithms
- Developing frontend skills
- Building practical projects
- Improving problem-solving abilities`
        },

        contact: {
            description: 'Get contact information',
            usage: 'contact',
            fn: () => `Name: Kashish Golhani
Email: kashishglhani@gmail.com
GitHub: https://github.com/Kashish1704
LinkedIn: https://www.linkedin.com/in/kashish-golhani-251732350`
        },

        github: {
            description: 'Open GitHub profile',
            usage: 'github',
            fn: () => {
                window.open('https://github.com/Kashish1704', '_blank')
                return 'Opening Kashish GitHub profile...'
            }
        },

        linkedin: {
            description: 'Open LinkedIn profile',
            usage: 'linkedin',
            fn: () => {
                window.open('https://www.linkedin.com/in/kashish-golhani-251732350', '_blank')
                return 'Opening LinkedIn profile...'
            }
        },

        resume: {
            description: 'View resume',
            usage: 'resume',
            fn: () => 'Resume section will be updated when the resume file is added.'
        },

        social: {
            description: 'View social media links',
            usage: 'social',
            fn: () => `GitHub: https://github.com/Kashish1704
LinkedIn: https://www.linkedin.com/in/kashish-golhani-251732350
Email: kashishglhani@gmail.com`
        },

        echo: {
            description: 'Echo a passed string',
            usage: 'echo <string>',
            fn: (...args) => args.join(' ')
        }
    }

    const welcomeMessage = `
╔════════════════════════════════════════╗
║       Welcome to Kashish's CLI!        ║
╚════════════════════════════════════════╝

Hello! 👋 Welcome to my interactive portfolio.

Explore my profile using these commands:

  • about      - Learn about me
  • skills     - View my technical skills
  • projects   - Explore my projects
  • education  - View my education
  • experience - My learning journey
  • contact    - Get in touch
  • github     - Open my GitHub
  • linkedin   - Open my LinkedIn
  • social     - View social links

Type 'help' to see all available commands.

Happy exploring! 🚀
`

    return (
        <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
            <div className="cli-window">
                <Terminal
                    commands={commands}
                    welcomeMessage={welcomeMessage}
                    promptLabel={'kashish:~$'}
                    promptLabelStyle={{ color: '#00ff00' }}
                />
            </div>
        </MacWindow>
    )
}

export default Cli
