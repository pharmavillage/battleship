import React from "react";
import { render, Text } from "ink";
import Spinner from "ink-spinner";

export const Loading = () => (
  <Text>
    <Text color="green">
      <Spinner type="dots" />
    </Text>
    {" Loading"}
  </Text>
);

const App = () => <Loading />;

render(<App />);
