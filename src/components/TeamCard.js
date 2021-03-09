import React from 'react'


const TeamCard = ({ team }) => {
    return (
        <div className="border w-2/5 mx-5 my-3">
            <div className="text-center text-xl">{ team.name }</div>
            <ul>
                {
                    team.players.map(player => (
                        <li key={player}>{ player }</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default TeamCard
