import React from 'react'

const PlayerSearch = ({ handleSearch }) => {
    return (
        <div className="w-full h-screen-1/10 mb-5">
            <input 
                type="text" 
                className="border w-full h-full rounded-lg text-2xl text-center" 
                placeholder="enter player name to search"
                onChange={ handleSearch }
            />
        </div>
    )
}

export default PlayerSearch
