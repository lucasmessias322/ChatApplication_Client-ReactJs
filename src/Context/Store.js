import React, { createContext, useState } from 'react'
import useStorage from '../utils/useStorage';
import {Navigate} from 'react-router-dom'

const initialState = {
    token: "",
    userdata: {}
}

export const AppContext = createContext(initialState)

function Store(props) {
    const [state, setState] = useState(initialState)
    const [token, setToken] = useStorage('token')
    const [currentUserData, setCurrentUserData] = useStorage('currentUserData')

    function updateState(key, value) {
        setState({
            ...state,
            [key]: value
        })
    }

    function logout(){
        setToken("");
        setCurrentUserData("");
        localStorage.removeItem('token');
        localStorage.removeItem('currentUserData');
        <Navigate to="/"/>
    }

    return (
        <AppContext.Provider value={{
            token,
            setToken,
            currentUserData,
            setCurrentUserData,
            logout,
            setUserdata: userdata => updateState('userdata', userdata)   
        }}>

            {props.children}

        </AppContext.Provider>

    )
}

export default Store
