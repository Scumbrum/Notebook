import { Action } from "redux";
import { NoteReducerType } from "../../models/storeModels";

const initialValue:NoteReducerType = {
    searchQuery: "",
    notes: [],
    selected: -1
}

export const noteReducer = (state:NoteReducerType = initialValue, action:Action):NoteReducerType => {
    switch(action.type) {
        default: 
            return state
    }
}