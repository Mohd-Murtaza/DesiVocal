import React, { useState } from 'react';
import CharacterSelection from './components/CharacterSelection';
import PromptGeneration from './components/PromptGeneration';
import Chatbox from './components/Chatbox';
import TextToSpeech from './components/TextToSpeech';

const App = () => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const [conversation, setConversation] = useState([]);

  const handleCharacterSelect = (characters) => {
    setSelectedCharacters(characters);
  };

  const handlePromptResponse = (response) => {
    console.log(response,"line 16"); // Log the response to inspect its structure
    if (typeof response === 'string') {
      setConversation(response.split('\n'));
    } else {
      console.error('Unexpected response format:', response);
    }
  };

  return (
    <div>
      <CharacterSelection onSelect={handleCharacterSelect} />
      {selectedCharacters.length === 2 && (
        <PromptGeneration
          characters={selectedCharacters}
          onPromptResponse={handlePromptResponse}
        />
      )}
      {conversation.length > 0 && (
        <Chatbox conversation={conversation} />
      )}
      {conversation.length > 0 && conversation.map((dialogue, index) => (
        <TextToSpeech key={index} text={dialogue} />
      ))}
    </div>
  );
};

export default App;