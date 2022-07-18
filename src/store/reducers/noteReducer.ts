import { ActionsTypes, NoteReducerType, NotesAction } from "../../models/storeModels";

const initialValue:NoteReducerType = {
    searchQuery: "",
    notes: [],
    selected: -1
}

export const noteReducer = (state:NoteReducerType = initialValue, action:NotesAction):NoteReducerType => {
    switch(action.type) {
        case ActionsTypes.SET_NOTES:
            return {...state, notes: action.payload}
        case ActionsTypes.SET_SEARCH:
            return {...state, searchQuery: action.payload}
        case ActionsTypes.SET_SELECTED:
            return {...state, selected: action.payload}
        default: 
            return state
    }
}