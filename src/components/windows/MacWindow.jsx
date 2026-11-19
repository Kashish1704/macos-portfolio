
import React from 'react'
import { Rnd } from 'react-rnd'
import "./window.scss"

const MacWindow = ({
    children,
    width = "40vw",
    height = "40vh",
    windowName,
    setWindowsState,
    activeWindow,
    setActiveWindow
}) => {
    const closeWindow = () => {
        setWindowsState(state => ({
            ...state,
            [windowName]: false
        }))
    }

    return (
        <Rnd
            default={{
                width,
                height,
                x: 300,
                y: 200
            }}
            minWidth={300}
            minHeight={200}
            bounds="parent"
            dragHandleClassName="nav"
            cancel=".dots"
            style={{
                zIndex: activeWindow === windowName ? 100 : 1
            }}
            onMouseDown={() => setActiveWindow(windowName)}
            onDragStart={() => setActiveWindow(windowName)}
        >
            <div className="window">
                <div className="nav">
                    <div className="dots">
                        <button
                            type="button"
                            onClick={closeWindow}
                            className="dot red"
                            aria-label="Close window"
                        />

                        <div className="dot yellow" />
                        <div className="dot green" />
                    </div>

                    <div className="title">
                        <p>Kashish — {windowName || "Portfolio"}</p>
                    </div>
                </div>

                <div className="main-content">
                    {children}
                </div>
            </div>
        </Rnd>
    )
}

export default MacWindow
