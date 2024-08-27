import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

function App() {
  // Custom dictionary for spell-checking
  const customDictionary = {
    teh: "the",
    wrok: "work",
    fot: "for",
    exampl: "example"
  };

  // State to manage input text and correction message
  const [inputText, setInputText] = useState('');
  const [correctionMessage, setCorrectionMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const text = e.target.value;
    setInputText(text);

    // Reset correction message
    setCorrectionMessage('');

    // Split text into words
    const words = text.split(' ');

    // Check each word against the dictionary
    for (let word of words) {
      const lowerCaseWord = word.toLowerCase();
      if (customDictionary[lowerCaseWord]) {
        setCorrectionMessage(`Did you mean: ${customDictionary[lowerCaseWord]}?`);
        break;  // Stop after the first match
      }
    }
  };

  return (
    <div className="App">
      <textarea
        value={inputText}
        onChange={handleChange}
        placeholder="Type something here..."
        className="spell-check-textarea"
      />
      {correctionMessage && <p className="correction-message">{correctionMessage}</p>}
    </div>
  );
}

export default App;
