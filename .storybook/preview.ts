
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

// TODO Should work without any
setCompodocJson(docJson as any);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      // color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  themes: {
    default: 'light',
    list: [
      {
        name: 'light',
        class: ['light-theme', 'mat-typography'],
        color: '#3f51b5'
      },
      {
        name: 'dark',
        class: ['dark-theme', 'mat-typography'],
        color: '#9c27b0'
      }
    ],
  }
}
