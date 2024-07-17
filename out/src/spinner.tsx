import React from "react";
import { render, Text } from "ink";
import { Spinner as _Spinner } from "ink-spinner";

export const Spinner = () => {
  render(
    <Text>
      <Text color="green">
        <_Spinner type="dots" />
      </Text>
      {" Loading"}
    </Text>
  );
};
