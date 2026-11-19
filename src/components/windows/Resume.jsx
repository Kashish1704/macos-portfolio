
import React from 'react'
import MacWindow from './MacWindow'
import "./resume.scss"

const Resume = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow
            windowName={windowName}
            setWindowsState={setWindowsState}
            width="65vw"
            height="75vh"
        >
            <div className="resume-window">
                <embed
                    src="/resume.pdf"
                    type="application/pdf"
                    title="Kashish Golhani Resume"
                />
            </div>
        </MacWindow>
    )
}

export default Resume
