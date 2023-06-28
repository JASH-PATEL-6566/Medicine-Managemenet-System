import { createContext, useReducer } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const INITIAL_STATE = {
        isAlertOpen: false,
        isPopUpOpen: false,
        alertMsg: '',
        alertTitle: '',
        popupMsg: '',
        popupType: '',
        number_of_notifications: 10,
    }


    const StateReducer = (state, action) => {
        switch (action.type) {
            case "open alert":
                return {
                    ...INITIAL_STATE,
                    isAlertOpen: true,
                    alertMsg: action.playload.msg,
                    alertTitle: action.playload.title,
                }
            case "open popup":
                return {
                    ...INITIAL_STATE,
                    isPopUpOpen: true,
                    popupMsg: action.playload.msg,
                    popupType: action.playload.type
                }
            case "close alert":
                return {
                    ...INITIAL_STATE,
                    isAlertOpen: false,
                    alertMsg: "",
                    alertTitle: ""
                }
            case "close popup":
                return {
                    ...INITIAL_STATE,
                    popupType: "",
                    isPopUpOpen: false,
                    popupMsg: ""
                }
            case "set number of notifications":
                return {
                    ...INITIAL_STATE,
                    number_of_notifications: action.payload
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(StateReducer, INITIAL_STATE);

    return (
        <StateContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </StateContext.Provider>
    )
}