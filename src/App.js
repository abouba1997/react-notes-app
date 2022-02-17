import { nanoid } from "nanoid";
import AddNote from "./components/AddNote";
import { useState, useEffect } from "react";

import Note from "./components/Note";
import Search from "./components/Search";
import Header from "./components/Header";

function App() {
  const notesTab = [
    {
      id: nanoid(),
      text: "First note",
      date: "26/02/2021",
    },
    {
      id: nanoid(),
      text: "Second note",
      date: "28/02/2021",
    },
    {
      id: nanoid(),
      text: "Third note",
      date: "30/01/2021",
    },
  ];

  const [notes, setNotes] = useState(notesTab);
  const [searchedText, setSearchedText] = useState("");
  const [isBackgroundLight, setIsBackgroundLight] = useState(false);

  const addNote = (text) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: new Date().toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const searchText = (text) => {
    setSearchedText(text);
  };

  const toggleBacckground = () => {
    setIsBackgroundLight(() => !isBackgroundLight);
  };

  //Saving and retrieving data from localStorage
  useEffect(() => {
    const newNotes = JSON.parse(localStorage.getItem("react-notes-app-data"));
    if (newNotes) {
      setNotes(newNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className={`content ${isBackgroundLight ? "dark" : ""}`}>
      <Header toggleBac={toggleBacckground} />
      <Search dSearchText={searchText} />
      <div className="container">
        {notes
          .filter((note) => note.text.toLowerCase().includes(searchedText))
          .map((note) => (
            <Note
              key={note.id.toString()}
              id={note.id}
              text={note.text}
              date={note.date}
              deletNote={deleteNote}
            />
          ))}
        <AddNote handleAddNote={addNote} />
      </div>
    </div>
  );
}

export default App;
