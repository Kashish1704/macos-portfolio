
import React from 'react'
import MacWindow from './MacWindow'
import "./spotify.scss"

const Spotify = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow
            width="25vw"
            height="55vh"
            windowName={windowName}
            setWindowsState={setWindowsState}
        >
            <div className="spotify-window">
                <iframe
                    title="Spotify Playlist"
                    src="https://open.spotify.com/embed/playlist/37i9dQZF1DX14CbVHtvHRB?utm_source=generator&theme=0"
                    width="100%"
                    height="100%"
                    style={{ borderRadius: "12px", border: 0 }}
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
        </MacWindow>
    )
}

export default Spotify
