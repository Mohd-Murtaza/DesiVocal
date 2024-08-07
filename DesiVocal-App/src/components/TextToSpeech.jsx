import React, { useState } from 'react';
import axios from 'axios';
import { Button } from './ui/button';

const TextToSpeech = ({ text }) => {
  const VITE_APP_HUGGINGFACE_TOKEN=import.meta.env.VITE_APP_HUGGINGFACE_TOKEN
  const [audioLink, setAudioLink] = useState(null);

  const handleTTS = async () => {
    try {
      const response = await axios.post('https://ezmh9t6vbvhitgly.us-east-1.aws.endpoints.huggingface.cloud', {
        inputs: {
          text,
          language: 'en',
          model_id: '3ccb64b4-8a8b-4abe-ab73-40a2ea307b08',
        },
      }, {
        headers: {
          'Authorization': 'Bearer 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',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
      });
      setAudioLink(response.data.audioLink);
    } catch (error) {
      console.error('Error generating TTS:', error);
    }
  };

  return (
    <div>
      <Button onClick={handleTTS}>Text-to-Speech</Button>
      {audioLink && <audio src={audioLink} controls />}
    </div>
  );
};

export default TextToSpeech;
