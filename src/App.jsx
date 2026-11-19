
import { useState } from 'react'
import "./app.scss"

import Dock from './components/Dock'
import Nav from './components/Nav'

import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'
import Spotify from './components/windows/Spotify'
import Cli from './components/windows/Cli'

function App() {
    const [windowsState, setWindowsState] = useState({
        github: false,
        note: false,
        resume: false,
        spotify: false,
        cli: false
    })

    const [activeWindow, setActiveWindow] = useState(null)

    const windowProps = (windowName) => ({
        windowName,
        setWindowsState,
        activeWindow,
        setActiveWindow
    })

    return (
        <main>
            <Nav />

            <Dock setWindowsState={setWindowsState} />

            {windowsState.github && (
                <Github {...windowProps("github")} />
            )}

            {windowsState.note && (
                <Note {...windowProps("note")} />
            )}

            {windowsState.resume && (
                <Resume {...windowProps("resume")} />
            )}

            {windowsState.spotify && (
                <Spotify {...windowProps("spotify")} />
            )}

            {windowsState.cli && (
                <Cli {...windowProps("cli")} />
            )}
        </main>
    )
}

export default App
