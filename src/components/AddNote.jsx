import React, { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;
  const handleChange = (e) => {
    if (characterLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };
  const handleSave = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
    }
    setNoteText("");
  };
  return (
    <>
      <div className="note new-note">
        <textarea
          rows="8"
          cols="10"
          placeholder="Please type your note here"
          onChange={handleChange}
          value={noteText}
        ></textarea>
        <div className="note-footer">
          <small>Remaining characters: {characterLimit - noteText.length}</small>
          <button className="save-note" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNote;
