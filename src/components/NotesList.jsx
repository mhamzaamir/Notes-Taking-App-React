import React from "react";
import Note from "./Note";
import AddNote from "./AddNote";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  /*
    const {notes} = props; 
    OR
    const notes = props.notes;
  */
  return (
    <>
      <div className="notes-list">
        {notes.map((note) => <Note key={note.id} id={note.id} text={note.text} date = {note.date} handleDeleteNote={handleDeleteNote} />)}
        <AddNote handleAddNote={handleAddNote} />
      </div>
    </>
  );
};

export default NotesList;
