// import '../assets/css/index.css'; // replace with the name of your tailwind css file
import '!style-loader!css-loader!postcss-loader!../assets/css/index.css';
/** @type { import('@storybook/react').Preview } */

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
