
import React, { useEffect, useState } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atelierDuneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

import MacWindow from './MacWindow'
import "./note.scss"

const Note = ({ windowName, setWindowsState }) => {
    const [markdown, setMarkdown] = useState('')
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        const controller = new AbortController()

        const fetchNote = async () => {
            try {
                const response = await fetch('/note.txt', {
                    signal: controller.signal
                })

                if (!response.ok) {
                    throw new Error('Unable to load note.txt')
                }

                const text = await response.text()
                setMarkdown(text)

            } catch (err) {
                if (err.name !== 'AbortError') {
                    setError('Unable to load About Me content.')
                    console.error(err)
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
        }

        fetchNote()

        return () => controller.abort()
    }, [])

    return (
        <MacWindow
            windowName={windowName}
            setWindowsState={setWindowsState}
        >
            <div className="note-window">
                {loading ? (
                    <p>Loading About Me...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    <SyntaxHighlighter
                        language="typescript"
                        style={atelierDuneDark}
                    >
                        {markdown}
                    </SyntaxHighlighter>
                )}
            </div>
        </MacWindow>
    )
}

export default Note
