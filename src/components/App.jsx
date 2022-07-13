import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [notes, setNotes] = useState([]);
  function addNote(obj) {
    setNotes((prevValue) => {
      return [...prevValue, obj];
    });
  }

  function createNote(obj) {
    return <Note key={obj.title} id={obj.title} title={obj.title} content={obj.content} erase = {deleteNote} />;
  }

  function deleteNote(id){
    const newNotes = notes.filter((obj) => {
      if (obj.title === id){
        return false;
      }
      else{
        return true;
      }
    })
      setNotes(newNotes);
  }

  return (
    <div>
      <Header />
      <CreateArea onFilling={addNote} />
      {notes.map(createNote)}
      <Footer />
    </div>
  );
}

export default App;
