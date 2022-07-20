import {useReducer, createContext} from 'react'

export const ThemeContext = createContext()

const changeColor = (state, action) =>{
    switch (action.type) {    
        case 'CHANGE_MODE':
            return {...state, mode: action.payload}
        default:
            return state
    }
}

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(changeColor, {
        mode: 'light',
    })

    

    const changeMode = (mode) => {
       dispatch({type:'CHANGE_MODE', payload:mode})
    }
   return(
       <ThemeContext.Provider value={{...state, changeMode}}>
           {children}
       </ThemeContext.Provider>
   )
}