import React, { useState } from "react";
import { render, Box, Text } from "ink";
import TextInput from "ink-text-input";

export const InputBox = () => {
  const [query, setQuery] = useState("");

  return (
    <Box>
      <Box marginRight={1}>
        <Text>Enter your query:</Text>
      </Box>
      <TextInput value={query} onChange={setQuery} />
    </Box>
  );
};

render(<InputBox />);
