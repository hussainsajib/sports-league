import React from 'react'

const PlayerCard = ({ player }) => {
    return (
        <div>
            <p>{ player.name } - { player.team }</p>
        </div>
    )
}

export default PlayerCard
