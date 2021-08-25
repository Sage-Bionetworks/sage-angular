import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { NotificationButtonComponent, NotificationModule } from '@sage-bionetworks/sage-angular/src/lib/notification';

export default {
  title: 'Sage Angular/Notification Button',
  component: NotificationButtonComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [NotificationModule],
    }),
  ],
  argTypes: {
    notificationsCount: {
      control: 'number',
    },
  },
} as Meta;

const Template: Story<NotificationButtonComponent> = (args: NotificationButtonComponent) => ({
  props: {
    notificationsCount: args.notificationsCount
  },
});

export const Default = Template.bind({});
Default.args = {
  notificationsCount: 0
};

export const WithNotifications = Template.bind({});
WithNotifications.args = {
  notificationsCount: 5
};