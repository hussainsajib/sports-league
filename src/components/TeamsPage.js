import React, { useState, useEffect } from 'react';
import TeamCard from './TeamCard'
import TeamsData from '../data/teams'

const TeamsPage = () => {

    const [ teams, setTeams ] = useState([])

    const [ showPopup, setShowPopup ] = useState(false)

    const [ newTeam, setNewTeam ] = useState("")

    useEffect(()=>{
        setTeams(TeamsData)
    },[])

    const addTeam = () =>{ togglePopup() }

    const togglePopup = () => {setShowPopup(!showPopup)}

    const removeTeam = ( deleteteam ) => {
        const removedTeams = teams.filter(team => team.name != deleteteam)
        setTeams(removedTeams)
    }
    
    const saveTeam = (e) => {
        setTeams([...teams, { name: newTeam, players: [] }])
        setShowPopup(false)
        setNewTeam("")
    }

    return (
        <div className="flex flex-col">
            <button className="self-end my-3 border rounded-full px-2 py-1" onClick={addTeam}>Create new</button>
            <div className="w-full flex flex-wrap justify-center">
                {teams.map((team,index )=> <TeamCard key={ index } team={ team } remove={removeTeam} />)}
            </div>

            {/* Modal that will be asking the user for input */}
            <div className={`w-screen h-screen fixed z-10 inset-0 border flex flex-col justify-center items-center bg-white bg-opacity-90 ${showPopup ? "block" : "hidden"}`}>
                <input 
                    type="text" 
                    className="my-3 mx-2 border border-black w-screen-3/4 h-screen-1/10 text-center text-2xl rounded-full" 
                    placeholder="enter team name and press Save" 
                    onChange={ (e) => setNewTeam(e.target.value) }
                />
                <div>
                    <button className="border px-10 py-3 mx-2 rounded-full bg-pink-600 text-white" onClick={saveTeam}>Create</button>
                    <button className="border px-10 py-3 mx-2 rounded-full bg-gray-600 text-white" onClick={togglePopup}>Cancel</button>
                </div>
            </div>
        </div>
    )
}

export default TeamsPage
