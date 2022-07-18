import { Note } from "../../models/databaseModels"
import { ActionsTypes, SetNotesAction, SetSearchAction, SetSelectedAction } from "../../models/storeModels"

export const setNotes = (notes: (Note | null)[]):SetNotesAction => ({type:ActionsTypes.SET_NOTES, payload:notes})
export const setSelected = (selected: number):SetSelectedAction => ({type:ActionsTypes.SET_SELECTED, payload:selected})
export const setSearch = (query: string):SetSearchAction => ({type:ActionsTypes.SET_SEARCH, payload:query})