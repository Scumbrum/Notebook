import { Note } from "./databaseModels";

export interface NoteReducerType {
    searchQuery: string;
    notes: Note[],
    selected: number,
}

export enum ActionsTypes {
    
}