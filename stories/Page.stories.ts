import { moduleMetadata, Story, Meta } from '@storybook/angular';

import { FooterModule } from '@sage-bionetworks/sage-angular/src/lib/footer';
import { NavbarModule } from '@sage-bionetworks/sage-angular/src/lib/navbar';

import Page from './components/page/page.component';

import * as NavbarStories from './Navbar.stories';
import * as FooterStories from './Footer.stories';

export default {
  title: 'Sage Angular/Page',
  component: Page,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        FooterModule,
        NavbarModule
      ],
    }),
  ],
} as Meta;

const Template: Story<Page> = (args: Page) => ({
  props: args,
});

export const SignedIn = Template.bind({});
SignedIn.args = {
  ...FooterStories.Default.args,
  ...NavbarStories.SignedIn.args
};

export const SignedOut = Template.bind({});
SignedOut.args = {
  ...FooterStories.Default.args,
  ...NavbarStories.SignedOut.args
};
