import React from 'react'
import { MdDelete } from 'react-icons/md';
import { BsPersonPlusFill } from 'react-icons/bs'

const TeamCard = ({ team, removeTeam, removePlayer, addPlayer }) => {
    
    return (
        <div className="border my-3 py-5 px-4 shadow-lg rounded-lg w-full lap:w-2/5 lap:mx-5 tab:w-5/12 tab:px-2 tab:mx-2" >
            <div className="flex justify-center bg-pink-100 rounded-lg py-2">
                <div className="text-xl w-5/6 text-center text-pink-700">
                    { team.name.toUpperCase() }
                </div>
                <BsPersonPlusFill className="text-2xl mx-1 cursor-pointer" onClick={ () => addPlayer(team.name) } />
                <MdDelete className="text-2xl mx-1 cursor-pointer" onClick={ () => removeTeam(team.name) }/>
            </div>
            <ul className="mt-5 ml-5">
                {
                    team.players.map(player => (
                        <li key={player} className="flex items-baseline mb-2">
                            <input type="checkbox" checked onChange={ () => {} } onClick={ () => removePlayer(team.name, player) } className="mr-2"/>
                            { player }
                        </li>
                    ))
                }
            </ul>
            
        </div>
    )
}

export default TeamCard
