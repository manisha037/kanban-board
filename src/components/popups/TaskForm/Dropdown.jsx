import React from 'react'
import { useData } from '../../boardsContexts/boardsContext'

export const Dropdown = (props) => {
    const {defaultboard } = useData()
    let NewTask = props.NewTask
    let changeColumn = props.changeColumn

    return (
        <select value={NewTask.status}  className='column-dropdown' name="column-dropdown" onChange={(e)=>{changeColumn(e)}} >
        {
            defaultboard.columns.map((column)=> {
                return <option
                    key={column.id}
                    value={column.name}
                    >{column.name}</option>
            })
        }
    </select>
    )
}
