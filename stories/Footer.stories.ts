import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { NavbarComponent, NavbarModule } from '@sage-bionetworks/sage-angular/src/lib/navbar';

export default {
  title: 'Library/Navbar',
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

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
