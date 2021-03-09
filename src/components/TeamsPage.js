import React from 'react'
import TeamCard from './TeamCard'

const TeamsPage = ({ teams }) => {
    return (
        <div className="w-full flex flex-wrap">
            {teams.map((team,index )=> <TeamCard key={ index } team={ team } />)}
        </div>
    )
}

export default TeamsPage
