import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Card, CardTitle } from "@/components/ui/card";

import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Card, CardTitle } from './ui/card';

const characters = [
  'Donald Trump',
  'Peter Griffin',
  'Kamala Harris',
  'Ryan Reynolds (Deadpool)',
  'Hugh Jackman (Wolverine)',
];

const CharacterSelection = ({ onSelect }) => {
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const handleSelect = (character) => {
    if (selectedCharacters.includes(character)) {
      setSelectedCharacters(selectedCharacters.filter((c) => c !== character));
    } else if (selectedCharacters.length < 2) {
      setSelectedCharacters([...selectedCharacters, character]);
    }
  };

  const handleConfirm = () => {
    if (selectedCharacters.length === 2) {
      onSelect(selectedCharacters);
    } else {
      alert('Please select exactly two characters.');
    }
  };

  return (
    <Card>
      <CardTitle>Select Characters</CardTitle>
      <ul style={{margin:"20px 0px"}}>
        {characters.map((character) => (
          <li key={character} style={{color:"black"}}>
            <label style={{display:"flex",justifyContent:"start", gap:"20px"}}>
              <Checkbox
                checked={selectedCharacters.includes(character)}
                onCheckedChange={() => handleSelect(character)}
              />
              {character}
            </label>
          </li>
        ))}
      </ul>
      <Button onClick={handleConfirm}>Confirm Selection</Button>
    </Card>
  );
};

export default CharacterSelection;