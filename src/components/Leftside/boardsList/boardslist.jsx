import React, { useContext } from 'react'

import './boardslist.css'
import { BsClipboard }  from 'react-icons/bs' ;
import { useData } from '../../boardsContexts/boardsContext';

function Boardslist() {
    const {boards , defaultboard  , setDefaultboard} = useData()

    return (
        <ul className='boardslist'>
            {
                boards.map((board)=> {
                    return <li  onClick={()=> {setDefaultboard(board)}} key={board.id} className={defaultboard.id == board.id ? 'board-name selected' : 'board-name' }><BsClipboard className='board-icon'/> {board.name}</li>
                })
            }
        </ul>
    )
}

export default Boardslist
