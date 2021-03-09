import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard'
import TeamsData from '../data/teams'
import PlayersData from '../data/players'

const TeamsPage = () => {

    // state for all the teams
    const [ teams, setTeams ] = useState([])

    // state for all the players
    const [ players, setPlayers ] = useState([])

    // state to identify whether to show modal to add a new team
    const [ showAddTeam, setShowAddTeam ] = useState(false)

    // state to identify whether to show modal to add a player to a team
    const [ showAddPlayer, setShowAddPlayer ] = useState(false)


    const [ newTeam, setNewTeam ] = useState("")

    // state to hold all available players
    const [ aPlayers, setAPlayers ] = useState([])

    // state to hold all player who are in process of being added to a team
    const [ playersToAdd, setPlayersToAdd ] = useState([])

    // state to keep track of the target team where players are being added
    const [ targetTeam, setTargetTeam ] = useState(null)

    // retrieve and set the main dataset
    useEffect(()=>{
        setTeams(TeamsData)
        setPlayers(PlayersData)
    },[])

    // function to show modal for adding new team
    const addTeam = () =>{ setShowAddTeam(true) }

    // function to handle removal of a team
    const removeTeam = ( deleteteam ) => {
        const removedTeams = teams.filter(team => team.name !== deleteteam)
        setTeams(removedTeams)
    }
    
    // function to save and cleanup after creating a new team
    const saveTeam = (e) => {
        const inputField = e.target.parentNode.parentNode.firstChild
        inputField.value = ""
        setTeams([...teams, { name: newTeam, players: [] }])
        setShowAddTeam(false)
        setNewTeam("")
    }

    // function to remove a player from a team
    const removePlayer = ( _team, _player ) =>{
        const targetIdx = teams.findIndex(team => team.name === _team)
        const filterPlayer = teams[targetIdx].players.filter(player => player !== _player)
        const modTeam = { ...teams[targetIdx], players: filterPlayer }
        const newTeams = teams.map((team, index) => index !== targetIdx ? team : modTeam)
        setTeams(newTeams)
    }

    // primary function to set the perimeters to remove a player
    const addPlayer = ( _teamName ) => {
        setShowAddPlayer(true)
        availablePlayers()
        setTargetTeam(_teamName)
    }

    // function to find all the available players
    const availablePlayers = () => {
        let usedPlayers = []
        teams.map( team => team.players.forEach(player => usedPlayers.push(player)))
        let availPlayers = []
        players.forEach(player => {if(!usedPlayers.includes(player.name)) availPlayers.push(player.name) })
        setAPlayers(availPlayers)
    }

    // function to handle when a player is being added to the array containing all players
    // who will be added to a particular team
    const addPlayerToTeam = ( e ) =>{
        if (!playersToAdd.includes(e.target.innerHTML)) {
            setPlayersToAdd([...playersToAdd, e.target.innerHTML])
        }
    }

    // Function to handle if the user cancels out of the modal
    const cancelAddingPlayer = () =>{
        setShowAddPlayer(false)
        setPlayersToAdd([])
    }

    // function to actually add the added players to the team
    const savePlayersToTeam = () =>{
        if (playersToAdd.length > 0){
            const targetIdx = teams.findIndex(team => team.name === targetTeam)
            const modPlayers = [ ...teams[targetIdx].players, ...playersToAdd ]
            const modTeam = { name: teams[targetIdx].name, players: modPlayers } 
            const updatedTeams = teams.map((team, index) => index !== targetIdx ? team : modTeam)
            setTeams(updatedTeams)
            setShowAddPlayer(false)
            setPlayersToAdd([])
        }
    }

    
    return (
        <div className="flex flex-col">
            <button className="rounded-full px-4 py-1 bg-pink-100 text-pink-600 hover:shadow self-center m-2 lap:self-end lap:my-3 lap:mr-20" onClick={addTeam}>Add Team</button>
            <div className="w-full flex flex-wrap justify-center">
                {teams.map((team,index )=> <TeamCard key={ index } team={ team } removeTeam={removeTeam} removePlayer={removePlayer} addPlayer={ addPlayer }/>)}
            </div>

            {/* Modal that will be asking the user for input to create new team */}
            <div className={`w-screen h-screen fixed z-10 inset-0 border flex flex-col justify-center items-center bg-white bg-opacity-90 ${showAddTeam ? "block" : "hidden"}`}>
                <input 
                    type="text" 
                    className="my-3 mx-2 border border-black w-screen-3/4 h-screen-1/10 text-center rounded-full text-sm lap:text-2xl" 
                    placeholder="enter team name and press 'Create'" 
                    onChange={ (e) => setNewTeam(e.target.value) }
                />
                <div>
                    <button className="border px-10 py-3 mx-2 rounded-full bg-pink-600 text-white" onClick={saveTeam}>Create</button>
                    <button className="border px-10 py-3 mx-2 rounded-full bg-gray-600 text-white" onClick={() => setShowAddTeam(false)}>Cancel</button>
                </div>
            </div>

            {/* Modal for adding a player to a team */}
            <div className={`w-screen h-screen fixed z-10 inset-0 border flex flex-col justify-center items-center bg-white bg-opacity-90 ${showAddPlayer ? "block" : "hidden"}`}>
                <div className="flex mb-3 w-screen-9/10 lap:w-screen-1/2 ">
                    <ul className="w-1/2 h-full mb-3 mr-1 border border-pink-500 bg-white">
                        {
                            aPlayers.length > 0 ? aPlayers.map(player => (
                                !playersToAdd.includes(player) &&
                                <li key={player} className="text-center py-2 hover:bg-pink-100 cursor-pointer" onClick={addPlayerToTeam}>{ player }</li>
                            )) : (<div className="text-center">No players are available at the moment</div>)
                        }
                    </ul>
                    <ul className="w-1/2 h-full border mb-3 ml-1 border-pink-500 bg-white">
                        {
                            playersToAdd.length > 0 ? playersToAdd.map(player =>(
                                <li className="text-center py-2 hover:bg-pink-100 cursor-pointer" key={player}>{ player }</li>
                            )): (<div className="text-center">No players added yet</div>)
                        }
                    </ul>
                </div>
                <div>
                    <button className="border px-10 py-3 mx-2 rounded-full bg-pink-600 text-white" onClick={savePlayersToTeam}>Add Players</button>
                    <button className="border px-10 py-3 mx-2 rounded-full bg-gray-600 text-white" onClick={cancelAddingPlayer}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default TeamsPage
