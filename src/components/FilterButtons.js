import React from 'react'

export default function FilterButtons({name, setFilter}) {
    
    return (
            <button 
            onClick={()=>setFilter(name)}
            className={name == "All" ? 'blue' : null}>
                {name}
            </button>
    )
}
