import React from 'react'
import PlayerCard from './PlayerCard'

const PlayerPage = ({ players }) => {
    return (
        <div>
            {
                players.map(player => <PlayerCard key={player.name} player={player} />)
            }
        </div>
    )
}

export default PlayerPage
