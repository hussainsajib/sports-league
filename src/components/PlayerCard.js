import React from 'react'
import Placeholder from '../assets/lego_head.jpg'

const PlayerCard = ({ player }) => {

    
    return (
        <div className="w-1/4 m-4 px-3 py-5 shadow-xl rounded-lg flex flex-col items-center ">
            <div className="rounded-full w-3/4 mb-3">
                <img src={ Placeholder } alt="player headshot" className="object-cover"/>
            </div>
            <div>
                <div className="text-2xl">{ player.name.toUpperCase() }</div>
                <div className="text-l text-center">{ player.team.toUpperCase(0) }</div>
            </div>
        </div>
    )
}

export default PlayerCard
