// db.js
import Dexie, { Table } from 'dexie';
import { Note } from '../models/databaseModels';

class NoteDexie extends Dexie {

    notes!: Table<Note>; 
  
    constructor() {
      super('myDatabase');
      this.version(1).stores({
        notes: '++id, name, content, date'
      });
    }
  }

export const db = new NoteDexie();

