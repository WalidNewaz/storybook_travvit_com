import type { Preview, Parameters } from "@storybook/react";
import { withThemeByDataAttribute } from '@storybook/addon-styling';
// import { withControls } from '@storybook/addon-controls';

import '../src/tailwind.css'; // replace with the name of your tailwind css file

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-mode',
  }),
];

// // Add global parameters or decorators here
// addParameters({
//   controls: { expanded: true },
// });

export const parameters: Parameters = {
  controls: { expanded: true },
};