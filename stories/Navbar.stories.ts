import { moduleMetadata, Meta, Story } from '@storybook/angular';
import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent, NavbarModule, Section } from '@sage-bionetworks/sage-angular/src/lib/navbar';
import { MOCK_AVATAR_32 } from '@sage-bionetworks/sage-angular/src/public-api';
import { MOCK_MENU_ITEMS } from '@sage-bionetworks/sage-angular/src/lib/navbar/navbar-user-button/mock-menu-items';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({ template: 'Homepage' })
class HomepageComponent {}

@Component({ template: 'Lorem' })
class LoremComponent {}

@Component({ template: 'Ipsum' })
class IpsumComponent {}

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'lorem', component: LoremComponent },
  { path: 'ipsum', component: IpsumComponent }
];

const sections: { [key: string]: Section } = {
  lorem: {
    name: 'Lorem',
    summary: 'Short summary of lorem.'
  },
  ipsum: {
    name: 'Ipsum',
    summary: 'Short summary of ipsum.'
  }
};

export default {
  title: 'Sage Angular/Navbar',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        HomepageComponent,
        LoremComponent,
        IpsumComponent
      ],
      imports: [
        RouterModule.forRoot(routes, { useHash: true }),
        BrowserAnimationsModule,
        NavbarModule
      ]
    }),
  ],
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  props: args
});

export const SignedIn = Template.bind({});
SignedIn.args = {
  signedIn: true,
  sections: sections,
  userAvatar: MOCK_AVATAR_32,
  userMenuItems: MOCK_MENU_ITEMS
};

export const SignedOut = Template.bind({});
SignedOut.args = {
  signedIn: false,
  sections: sections,
  userAvatar: MOCK_AVATAR_32,
  userMenuItems: MOCK_MENU_ITEMS
};