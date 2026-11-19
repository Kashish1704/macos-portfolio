
import React, { useState, useEffect } from 'react'

const DateTime = () => {
    const [dateTime, setDateTime] = useState('')

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date()

            const formattedDateTime = now
                .toLocaleString('en-IN', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                })
                .replace(/,/g, '')
                .toLowerCase()

            setDateTime(formattedDateTime)
        }

        updateDateTime()

        const interval = setInterval(updateDateTime, 60000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="datetime">
            {dateTime}
        </div>
    )
}

export default DateTime
