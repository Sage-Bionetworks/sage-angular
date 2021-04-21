import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { GithubButtonComponent, GithubButtonModule } from '@sage-bionetworks/sage-angular/src/lib/github-button';

export default {
  title: 'Buttons/GithubButton',
  component: GithubButtonComponent,
  argTypes: {
    color: {
      control: {
        type: 'inline-radio',
        options: ['default', 'primary', 'accent', 'warn'],
      }
    }
  },
  decorators: [
    moduleMetadata({
      imports: [GithubButtonModule]
    })
  ]
} as Meta;

const Template: Story<GithubButtonComponent> = (args: GithubButtonComponent) => ({
  props: args,
});

export const Basic = Template.bind({});
Basic.args = {
  label: 'GitHub',
  color: ''
};

// export const Raised = Template.bind({});
// Raised.args = {
//   label: 'GitHub',
// };
