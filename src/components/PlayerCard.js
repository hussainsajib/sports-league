import React from 'react'
import Placeholder from '../assets/lego_head.jpg'

const PlayerCard = ({ player }) => {

    
    return (
        <div className="w-8/12 m-2 px-2 py-5 shadow-xl rounded-lg flex flex-col items-center lap:m-4 lap:w-1/4 tab:w-5/12">
            <div className="rounded-full w-3/4 mb-3">
                <img src={ Placeholder } alt="player headshot" className="object-cover"/>
            </div>
            <div className="bg-pink-400 py-2 rounded-lg w-full">
                <div className="text-2xl text-center text-white">{ player.name.toUpperCase() }</div>
                <div className="text-l text-center text-pink-200">{ player.team ? player.team.toUpperCase() : "Not in a team" }</div>
            </div>
        </div>
    )
}

export default PlayerCard
