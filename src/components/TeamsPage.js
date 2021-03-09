import React from 'react'

const TeamsPage = ({ teams }) => {
    return (
        <div>
            {teams.map((team,index )=> <div key={index}>{team.name}</div>)}
        </div>
    )
}

export default TeamsPage
