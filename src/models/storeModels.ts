import { Note } from "./databaseModels";

export interface NoteReducerType {
    searchQuery: string;
    notes: Note[],
    selected: number,
}

export enum ActionsTypes {
    SET_NOTES = "loadNotes",
    SET_SEARCH = "setSearch",
    SET_SELECTED = "setSelected"
}

export interface SetNotesAction {
    type: ActionsTypes.SET_NOTES,
    payload: Note[]
}

export interface SetSearchAction {
    type: ActionsTypes.SET_SEARCH,
    payload: string
}

export interface SetSelectedAction {
    type: ActionsTypes.SET_SELECTED,
    payload: number
}

export type NotesAction =
    SetNotesAction
    | SetSelectedAction
    | SetSearchAction