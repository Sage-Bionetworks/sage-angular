// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata, Meta, Story } from '@storybook/angular';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubButtonComponent, GithubButtonModule } from '@sage-bionetworks/sage-angular/src/lib/github-button';
// import { GithubButtonComponent } from '@sage-bionetworks/sage-angular/src/lib/github-button';

export default {
  title: 'Example/GithubButton',
  component: GithubButtonComponent,
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  decorators: [
    moduleMetadata({
        imports: [GithubButtonModule]
    })
  ]
} as Meta;

const Template: Story<GithubButtonComponent> = (args: GithubButtonComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  // label: 'Button',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
