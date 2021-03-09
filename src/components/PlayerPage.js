import React from 'react'
import PlayerCard from './PlayerCard'

const PlayerPage = ({ players }) => {
    return (
        <div className="w-full flex flex-wrap justify-center">
            {
                players.map(player => <PlayerCard key={player.name} player={player} />)
            }
        </div>
    )
}

export default PlayerPage
