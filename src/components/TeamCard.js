import React from 'react'
import { MdDelete } from 'react-icons/md';
import { BsPersonPlusFill } from 'react-icons/bs'

const TeamCard = ({ team, removeTeam, removePlayer, addPlayer }) => {
    
    return (
        <div className="border w-2/5 mx-5 my-3 p-4">
            <div className="flex justify-center">
                <div className="text-xl w-5/6 text-center">
                    { team.name }
                </div>
                <BsPersonPlusFill className="text-2xl mx-1" onClick={ () => addPlayer(team.name) } />
                <MdDelete className="text-2xl mx-1" onClick={ () => removeTeam(team.name) }/>
            </div>
            <ul className="mt-5">
                {
                    team.players.map(player => (
                        <li key={player}>
                            <input type="checkbox" checked onChange={ () => {} } onClick={ () => removePlayer(team.name, player) }/>
                            { player }
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default TeamCard
