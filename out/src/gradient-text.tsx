import React from "react";
import { render } from "ink";
import Gradient from "ink-gradient";
import BigText from "ink-big-text";

export const GradientText = () => {
  render(
    <Gradient name="rainbow">
      <BigText text="unicorns" />
    </Gradient>
  );
};
