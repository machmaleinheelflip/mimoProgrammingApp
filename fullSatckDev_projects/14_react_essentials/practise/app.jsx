import React, { useState } from "react";

const App = () => {
  const [message, setMessage] = useState("");

  const  handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Type something..."
      />
      <p>Message: {message}</p>
    </div>
  );
};

export default App;
