import React, { useState } from "react";

function Heading(props) {
  const [input, setInput] = useState("");

  function handleInput(event) {
    setInput(event.target.value);
  }

  function submitIp(event) {
    props.ipCatch(input);
    event.preventDefault();
    setInput("");
  }

  return (
    <div className="heading">
      <h1>IP ADDRESS TRACKER</h1>
      <input
        className="ip-input"
        type="text"
        placeholder="Search for any IP address or domain"
        onChange={handleInput}
        value={input}
      />
      <button className="submitButton" type="submit" onClick={submitIp}>
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
          <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
        </svg>
      </button>
    </div>
  );
}

export default Heading;
