
import React from 'react'
import "./dock.scss"

const Dock = ({ setWindowsState }) => {

    const openWindow = (windowName) => {
        setWindowsState(state => ({
            ...state,
            [windowName]: true
        }))
    }

    return (
        <footer className="dock">

            <div
                onClick={() => openWindow("github")}
                className="icon github"
                role="button"
                tabIndex={0}
                aria-label="GitHub Projects"
            >
                <img src="/doc-icons/github.svg" alt="GitHub" />
            </div>

            <div
                onClick={() => openWindow("note")}
                className="icon note"
                role="button"
                tabIndex={0}
                aria-label="About Me"
            >
                <img src="/doc-icons/note.svg" alt="Notes" />
            </div>

            <div
                onClick={() => openWindow("resume")}
                className="icon pdf"
                role="button"
                tabIndex={0}
                aria-label="Resume"
            >
                <img src="/doc-icons/pdf.svg" alt="Resume" />
            </div>

            <div
                onClick={() => window.open("https://calendar.google.com/", "_blank")}
                className="icon calender"
                role="button"
                tabIndex={0}
                aria-label="Google Calendar"
            >
                <img src="/doc-icons/calender.svg" alt="Calendar" />
            </div>

            <div
                onClick={() => openWindow("spotify")}
                className="icon spotify"
                role="button"
                tabIndex={0}
                aria-label="Spotify"
            >
                <img src="/doc-icons/spotify.svg" alt="Spotify" />
            </div>

            <div
                onClick={() => window.open("mailto:kashishglhani@gmail.com", "_blank")}
                className="icon mail"
                role="button"
                tabIndex={0}
                aria-label="Send Email"
            >
                <img src="/doc-icons/mail.svg" alt="Mail" />
            </div>

            <div
                onClick={() => window.open("https://www.linkedin.com/in/kashish-golhani-251732350", "_blank")}
                className="icon link"
                role="button"
                tabIndex={0}
                aria-label="LinkedIn Profile"
            >
                <img src="/doc-icons/link.svg" alt="LinkedIn" />
            </div>

            <div
                onClick={() => openWindow("cli")}
                className="icon cli"
                role="button"
                tabIndex={0}
                aria-label="Terminal"
            >
                <img src="/doc-icons/cli.svg" alt="Terminal" />
            </div>

        </footer>
    )
}

export default Dock
