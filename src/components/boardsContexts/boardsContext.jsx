import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

import { getboards } from '../../data/data' ;
import useLocalStorage from "use-local-storage";

const boardsContext = createContext()

export const useData = () => {
    return useContext(boardsContext);
};


export const DataProvider = ({ children }) => {

    const [data, setData] = useLocalStorage("data", getboards());
    if (data.length == 0) {
        setData(getboards())
    }


    const [boards, setboards] = useState(data)

    useEffect(() => {
        setData(boards)
    }, [boards])

    const [defaultboard, setDefaultboard] = useState(boards[0])


    const [theme, setTheme] = useLocalStorage('light');
    const [showBoardForm, setShowBoardForm] = useState({
        title: '',
        order: '',
        show: false,
    })

    const [showTaskForm, setShowTaskForm] = useState({
        title: 'Add New Task',
        order: 'add',
        show: false,
    })

    useEffect(() => {
        let newboards = boards.map((board) => board.id == defaultboard.id ? defaultboard : board)
        setData(newboards)
    }, [defaultboard])


    const [showwarning, setshowWarning] = useState({ show: false, title: '', order: '' })

    const [user,setUser]=useState({})

    const [isLoading, setLoading] = useState(false);

    const startLoading = () => {
        setLoading(true);
      };
    
      const stopLoading = () => {
        setLoading(false);
      };
 


    return (
        <boardsContext.Provider value={{
            theme, 
            setTheme ,  
            showTaskForm , 
            setShowTaskForm, 
            showwarning , 
            setshowWarning , 
            showBoardForm , 
            setShowBoardForm ,  
            defaultboard  , 
            setDefaultboard, 
            boards , 
            setboards,
            user,setUser,
            isLoading,
            startLoading,
            stopLoading 
            

        }}>
            {children}
        </boardsContext.Provider>
    );
};