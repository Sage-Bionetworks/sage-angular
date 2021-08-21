import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { AvatarComponent, AvatarModule, MOCK_AVATAR_32 } from '@sage-bionetworks/sage-angular/src/lib/avatar';

export default {
  title: 'Sage Angular/Avatar',
  component: AvatarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [AvatarModule],
    }),
  ],
} as Meta;

const Template: Story<AvatarComponent> = (args: AvatarComponent) => ({
  props: args,
});

export const Letters = Template.bind({});
Letters.args = {
  name: 'Awesome Avatar',
  size: 100,
  avatar: MOCK_AVATAR_32 // TODO Why doesn't this set the avatar?
};

export const Picture = Template.bind({});
Picture.args = {
  name: 'Awesome Avatar',
  src: 'https://i.imgur.com/VeZfqCw.png',
  size: 100
};
