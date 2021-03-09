import React from 'react'
import { MdDelete } from 'react-icons/md';

const TeamCard = ({ team, remove }) => {
    return (
        <div className="border w-2/5 mx-5 my-3 p-4">
            <div className="flex justify-center">
                <div className="text-xl w-5/6 text-center">
                    { team.name }
                </div>
                <MdDelete className="text-2xl" onClick={ () => remove(team.name) }/>
            </div>
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
