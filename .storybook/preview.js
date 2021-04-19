
import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

// import '@angular/material/prebuilt-themes/indigo-pink.css';

// import '!style-loader!css-loader!sass-loader!@angular/material/prebuilt-themes/indigo-pink.css';
// import '!style-loader!css-loader!sass-loader!./cssoverrides.sass'

setCompodocJson(docJson);

// export const decorators = {

// }

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
