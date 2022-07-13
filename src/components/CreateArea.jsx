import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';




function CreateArea(props) {
  const [info, setInfo] = useState({ title: "", content: "" });
  const[isClicked,setClicked] = useState(false);
  
  function handleSubmit(event) {
    props.onFilling(info);
    event.preventDefault();
    setInfo({ title: "", content: "" });
  }

  function handleChange(event) {
    const { value, name } = event.target;

    if (name === "title") {
      setInfo((prevValue) => {
        return { ...prevValue, title: value };
      });
    } else if (name === "content") {
      setInfo((prevValue) => {
        return { ...prevValue, content: value };
      });
    }
  }
  
  function handleClick(){
    setClicked(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className = "create-note">
      {isClicked && (
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={info.title}
        />
      )}
        
        <textarea onClick = {handleClick}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={isClicked ? "3" : "1"}
          value={info.content}
        />
        <Fab type="submit"><AddIcon /></Fab>
        
      </form>
    </div>
  );
}

export default CreateArea;
