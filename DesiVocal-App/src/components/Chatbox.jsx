import React, { useState } from 'react';
import { Card } from './ui/card';
import TextToSpeech from './TextToSpeech';
// import './Chatbox.css'; // Create and import a CSS file for any additional styling

const Chatbox = ({ conversation }) => {
  const [dialogues, setDialogues] = useState(conversation);

  const handleEdit = (index, text) => {
    const newDialogues = [...dialogues];
    newDialogues[index] = text;
    setDialogues(newDialogues);
  };

  return (
    <Card className="p-4">
      <h2 className="text-xl font-bold mb-4">Conversation</h2>
      <div className="chat-container space-y-4">
        {dialogues.map((dialogue, index) => (
          <div key={index} className="chat-message flex items-center space-x-4 p-4 rounded-lg bg-gray-100">
            <input
              type="text"
              value={dialogue}
              onChange={(e) => handleEdit(index, e.target.value)}
              className="chat-input flex-1 p-2 border rounded-md"
            />
            <TextToSpeech text={dialogue} />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Chatbox;