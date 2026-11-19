
import React from 'react'
import githubData from "../../assets/github.json"
import MacWindow from './MacWindow'
import "./github.scss"

const GitCard = ({ data }) => {
    return (
        <div className="card">
            <img
                src={data.image}
                alt={data.title}
            />

            <h1>{data.title}</h1>

            <p className="description">
                {data.description}
            </p>

            <div className="tags">
                {data.tags.map((tag, index) => (
                    <p className="tag" key={`${tag}-${index}`}>
                        {tag}
                    </p>
                ))}
            </div>

            <div className="urls">
                {data.repoLink && (
                    <a
                        href={data.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Repository
                    </a>
                )}

                {data.demoLink && (
                    <a
                        href={data.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Live Demo
                    </a>
                )}
            </div>
        </div>
    )
}

const Github = ({ windowName, setWindowsState }) => {
    return (
        <MacWindow
            windowName={windowName}
            setWindowsState={setWindowsState}
        >
            <div className="cards">
                {githubData.map(project => (
                    <GitCard
                        key={project.id}
                        data={project}
                    />
                ))}
            </div>
        </MacWindow>
    )
}

export default Github
