import React from "react";
import TrashIcon from "../assets/trash.svg";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <>
      <div className="note">
        <span>{text}</span>
        <div className="note-footer">
          <small>{date}</small>
          <img
            className="image"
            src={TrashIcon}
            alt="Delete button"
            width={18}
            height={18}
            onClick={() => handleDeleteNote(id)}
          />
        </div>
      </div>
    </>
  );
};

export default Note;
