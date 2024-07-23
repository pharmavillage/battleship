import { fn } from "@storybook/test";
import 世纪 from "./世纪";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Section| |Header/世纪",
  component: 世纪,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    // layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: "世纪",
    backgroundColor: "hello",
  },
};

export const Secondary = {
  args: {
    label: "世纪",
  },
};

export const Large = {
  args: {
    size: "large",
    label: "世纪",
  },
};

export const Small = {
  args: {
    size: "small",
    label: "世纪",
  },
};
