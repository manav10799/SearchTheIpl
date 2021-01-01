import React from 'react'
import PlayerCard from '../player-card/PlayerCard'
import "./Search.css"
import players from '../../data/Players'

const Search = ({ match:{params:{search: search}} }) => {
    const filteredPlayers = players.filter(({ name,country="Country" }) => {
        return name.toLowerCase().includes(search.toLowerCase())
    })
    var key = 0

    return(
        <div className="search-section">
            {filteredPlayers.map((player) => 
                <PlayerCard 
                    key={key+=1}
                    name={player.name}
                    country={player.country}
                    hand={player.hand}
                    role={player.role}
                />
            )}
        </div>        
    )
}

export default Search