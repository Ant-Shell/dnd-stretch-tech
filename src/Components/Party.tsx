import React from "react"
import "../Styles/Party.css"

const Party = () => {
    return (
        <div className="party-block">
            This is where your party will go.
            <button>Kill'em All</button>
        </div>
    )
}

export default Party

// Child Component: PartyMemeber (includes stats from form inputs, and delete button)