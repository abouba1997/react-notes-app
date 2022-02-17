import React from "react";
import { FaTrash } from "react-icons/fa";

const Note = ({id, text, date, deletNote}) => {
  
  const deleteNote = () => {
    deletNote(id);
  }
  
  return (
    <div className="note">
      <span className="note-text">{text}</span>
      <div className="note-footer">
        <span className="note-footer-text">{date}</span>
        <FaTrash className="fa-trash" onClick={deleteNote}/>
      </div>
    </div>
  );
};

export default Note;
