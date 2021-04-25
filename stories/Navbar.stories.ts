import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { NavbarComponent, NavbarModule } from '@sage-bionetworks/sage-angular/src/lib/navbar';

export default {
  title: 'Sage Angular/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [NavbarModule],
    }),
  ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args,
});

export const SignedIn = Template.bind({});
SignedIn.args = {
  user: {}
};

export const SignedOut = Template.bind({});
SignedOut.args = {
  user: null
};