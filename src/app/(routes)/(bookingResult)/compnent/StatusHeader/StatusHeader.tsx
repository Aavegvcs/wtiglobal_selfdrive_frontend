import React from 'react'


interface StatusHeaderProps {
    icon: React.ReactNode,
    headingTitle: string,
    textColor: string
}

const StatusHeader = ({ icon, headingTitle, textColor }: StatusHeaderProps) => {
    return (
        <div className={`flex items-center gap-2`}>
            {icon}
            <h3 className={`${textColor} text-4xl font-semibold`}>{headingTitle}</h3>
        </div>
    )
}

export default StatusHeader