
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

setCompodocJson(docJson);

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
        color: '#00aced'
      },
      {
        name: 'dark',
        class: ['dark-theme', 'mat-typography'],
        color: '#3b5998'
      }
    ],
  },
}
