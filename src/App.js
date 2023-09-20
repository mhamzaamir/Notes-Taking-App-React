import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import "./App.css";
import SearchNote from "./components/SearchNote";
import Header from "./components/Header";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes"));
    if (savedNotes) {
      setNotes(savedNotes);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date().toLocaleDateString();
    const id = nanoid();
    const newNote = {
      id,
      text,
      date,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const deleteNote = notes.filter((note) => note.id !== id);
    setNotes(deleteNote);
  };

  console.log(searchText);
  return (
    <>
      <div className={`${darkMode && "dark-mode"}`}>
        <div className="container">
          <Header handleDarkMode={setDarkMode} />
          <SearchNote handleSearchNote={setSearchText} />
          <NotesList
            notes={notes.filter((note) =>
              note.text.toLowerCase().includes(searchText)
            )}
            handleAddNote={addNote}
            handleDeleteNote={deleteNote}
          />
        </div>
      </div>
    </>
  );
}

export default App;
