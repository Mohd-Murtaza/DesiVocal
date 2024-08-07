import React from "react";
import { Button } from "./ui/button";
import { GoogleGenerativeAI } from "@google/generative-ai";

const PromptGeneration = ({ characters, onPromptResponse }) => {
  const VITE_APP_LLM_API_KEY = import.meta.env.VITE_APP_LLM_API_KEY;
  // console.log(VITE_APP_LLM_API_KEY, "key");

  const genAI = new GoogleGenerativeAI(VITE_APP_LLM_API_KEY);

  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 1,
    topK: 1,
    maxOutputTokens: 2048,
  };

  const generatePrompt = () => {
    return `
      Generate a short friendly conversation in rap between two characters. Each character should have a couple of lines, and each line should be concise. Use the following placeholders for the characters'names
      Character 1: ${characters[0]}
      Character 2: ${characters[1]}
    `;
  };

  const handleGenerate = async () => {
    const prompt = generatePrompt();
    console.log(prompt, "prompt");
    try {
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      });

      const result = await chatSession.sendMessage(prompt);
      const response = result.response.text();
      console.log(response); // Log the response to inspect its structure
      onPromptResponse(response);
    } catch (error) {
      console.error("Error generating prompt:", error);
      onPromptResponse("An error occurred while generating the prompt.");
    }
  };

  return (
    <div>
      <h2>Generate Prompt</h2>
      <Button onClick={handleGenerate}>Generate Conversation</Button>
    </div>
  );
};

export default PromptGeneration;
