import React from 'react'

const PlayerPage = ({ players }) => {
    return (
        <div>
            {
                players.map(player => <div key={player.name}>{ player.name }</div>)
            }
        </div>
    )
}

export default PlayerPage
