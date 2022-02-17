import { useState } from "react";

const AddNote = ({ handleAddNote }) => {
  const charLimits = 200;
  const [text, setText] = useState("");

  const onChange = (e) => {
      if(charLimits - e.target.value.length >= 0) {
          setText(e.target.value);
      }
  };

  const handleSaveClick = () => {
    if (text.trim().length > 0) {
      handleAddNote(text);
      setText("");
    }
  };

  return (
    <div className="add-note">
      <textarea
        name="text"
        cols="30"
        rows="6"
        placeholder="Enter your note..."
        value={text}
        onChange={onChange}
      ></textarea>
      <div className="add-note-footer">
        <span>{charLimits - text.length} Remaining</span>
        <button onClick={handleSaveClick}>Save</button>
      </div>
    </div>
  );
};

export default AddNote;
