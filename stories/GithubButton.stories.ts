// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
// import { Story, Meta } from '@storybook/angular/types-6-0';
import { storiesOf, moduleMetadata, Meta, Story } from '@storybook/angular';
// import { BrowserModule } from '@angular/platform-browser';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AppModule } from '@sage-bionetworks/sage-angular-demo/src/app/app.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GithubButtonComponent, GithubButtonModule } from '@sage-bionetworks/sage-angular/src/lib/github-button';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { GithubButtonComponent } from '@sage-bionetworks/sage-angular/src/lib/github-button';

// storiesOf('Button', module)
//   .add('Basic', () => ({
//     template: `
//     <div>
//       <button mat-button>Basic</button>
//       <button mat-button color="primary">Primary</button>
//       <button mat-button color="accent">Accent</button>
//       <button mat-button color="warn">Warn</button>
//       <button mat-button disabled>Disabled</button>
//     </div>
//     `,
//     moduleMetadata: {
//       imports: [MatButtonModule]
//     }
//   }));

export default {
  title: 'Example/GithubButton',
  component: GithubButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    moduleMetadata({
      imports: [MatButtonModule]
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

// // export const Secondary = Template.bind({});
// // Secondary.args = {
// //   label: 'Button',
// // };

// // export const Large = Template.bind({});
// // Large.args = {
// //   size: 'large',
// //   label: 'Button',
// // };

// // export const Small = Template.bind({});
// // Small.args = {
// //   size: 'small',
// //   label: 'Button',
// // };
