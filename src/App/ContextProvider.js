import React from 'react'
import AppContext from './App-Context'
import { useReducer } from 'react'

const defaultState = {
    isLoggedIn: false,
    myProfile: {}
}

const reducerFunction = (state, action) => {
    if(action.identifier === 'logIn') {

        localStorage.setItem('isLoggedIn', '1');

        const obj = {
            isLoggedIn: true,
            myProfile: action.profile
        }
        return obj
    }
    else
    if(action.identifier === 'logOut') {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('profile');
        const obj = {
            isLoggedIn: false,
            myProfile: {}
        }
        return obj
    }
}


function ContextProvider(props) {

    const [appState, dispatchFunction] = useReducer(reducerFunction, defaultState);

    const logIn = (profile) => {
        dispatchFunction({identifier: 'logIn', profile: profile});
    }

    const logOut = () => {
        dispatchFunction({identifier: 'logOut'});
    }


    const contextValues = {
        isLoggedIn: appState.isLoggedIn,
        logIn: logIn,
        logOut: logOut,
        myProfile: appState.myProfile,
    }

    return (
        <AppContext.Provider value = {contextValues}>
            {props.children}
        </AppContext.Provider>
    )
}

export default ContextProvider