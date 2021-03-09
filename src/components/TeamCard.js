import React from 'react'


const TeamCard = ({ team }) => {
    return (
        <div className="border w-2/5 mx-5 my-3">
            <div>{ team.name }</div>
            <ul>
                {team.players.map(player => <li>{ player }</li>)}
            </ul>
        </div>
    )
}

export default TeamCard
