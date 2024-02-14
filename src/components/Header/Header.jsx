import React, { useContext, useEffect, useState } from 'react'
import './Header.css'
import { FiMoreVertical } from "react-icons/fi"
import { useData } from '../boardsContexts/boardsContext'
import Settingbuttons from '../popups/settingbuttons/Settingbuttons'
import { BsCloudMoonFill } from 'react-icons/bs';
import { BsCloudSunFill } from 'react-icons/bs';
import { FaUserCircle } from "react-icons/fa";

function Header() {
    const [controlmenu, setControlMenu] = useState(false);
    const { theme, setTheme, setShowTaskForm, setshowWarning, showBoardForm, setShowBoardForm, defaultboard, setDefaultboard, boards, setboards,user } = useData();
    const editMethod = () => {
        setShowBoardForm({ title: 'Edit Board', show: true, order: "edit" })
        setControlMenu(!controlmenu)
    }

    const deleteMethod = () => {
        setshowWarning({ show: true, title: defaultboard.name, order: "Delete this board?" });
        setControlMenu(!controlmenu);
    }

    return (
        <div className='header'>
            <div className='header-menu'>
                {boards.length > 0 && <div className='board-title'>{defaultboard.name}</div>}
                <div className='header-left'>
                    <FaUserCircle fontSize={"30"} /> 
                    <div className='header-user'>
                        {user?.username?user?.username:"user_name"}
                    </div>
                    {/* <button disabled={ boards.length > 0 ? false:true } className='button-add-task'>Jassi</button> */}

                    <div className='light-dark'>
                        {(theme == 'light' ? <BsCloudMoonFill onClick={() => setTheme((theme == "light") ? 'dark' : 'light')} className='moon' /> : <BsCloudSunFill className='sun' onClick={() => setTheme((theme == "light") ? 'dark' : 'light')} />)}
                    </div>

                    {boards.length > 0 && <FiMoreVertical disabled={boards.length > 0 ? false : true} className='mysettingIcon' onClick={() => { setControlMenu(!controlmenu) }} />}

                    {controlmenu && <Settingbuttons myclass={'effects-setting'} setControlMenu={setControlMenu} controlmenu={controlmenu} editMethod={editMethod} deleteMethod={deleteMethod} title={"Board"} />}
                </div>
            </div>
        </div>
    )
}

export default Header
