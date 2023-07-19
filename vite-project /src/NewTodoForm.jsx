import { useState } from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

export function NewTodoForm( {onSubmit} ) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
    
        onSubmit(newItem)
    
        setNewItem("") 
    }
    
    
    return (
        <form  onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <label htmlFor="item">new item</label>
                    <input 
                    value={newItem} 
                    onChange={e => setNewItem(e.target.value)}
                    type="text" 
                    id="item" />
                </div>
                <button className="btn">add <FontAwesomeIcon icon={faPlus} />
                </button>

        </form>
    )
}