import React, { useContext } from 'react'
import './Leftside.css'
import Boardslist from './boardsList/boardslist'
import { useData } from '../boardsContexts/boardsContext'


function Leftside() {
    const { theme, setTheme , setShowBoardForm ,  boards , setboards , defaultboard , myrequest , setmyrequest} = useData()
    const createClicked = ()=> {
        setShowBoardForm({
            title:'Add New Board' ,
            order :'create',
            show:true,
          })
    }



    return (
        <div className='leftside'> 
            <p className='boards'>All Boards ({boards.length})</p> 
            <button className='addboard' onClick={()=> {createClicked()}} >+ Create New Board</button> 
            {boards.length > 0 && <Boardslist /> } 
            
        </div>
    )
}

export default Leftside
