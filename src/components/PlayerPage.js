import React, { useState, useEffect } from 'react'
import PlayerCard from './PlayerCard'
import PlayerSearch from './PlayerSearch'

import PlayersData from '../data/players'

const PlayerPage = () => {

    const [ allPlayers, setAllPlayers ] = useState([])
    
    const [ players, setPlayers ] = useState([])

    useEffect(() =>{
        setPlayers(PlayersData)
        setAllPlayers(PlayersData)
    },[])
    
    const handleSearch = (e) =>{
        const searchResult = allPlayers.filter(player => player.name.toLowerCase().includes(e.target.value.toLowerCase()) )
        setPlayers(searchResult)
    }
    
    return (
        <div className="w-full flex flex-col">
            <PlayerSearch handleSearch={handleSearch} />
            <div className="flex flex-wrap justify-center">
                {
                    players.map(player => <PlayerCard key={player.name} player={player} />)
                }
            </div>
        </div>
    )
}

export default PlayerPage
