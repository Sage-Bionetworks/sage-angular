import { MenuItem } from './menu-item';

export const MOCK_MENU_ITEMS: MenuItem[] = [
  {
    name: 'Profile',
    icon: 'account_circle',
    routerLink: '/profile',
  },
  {
    name: 'Sign out',
    icon: 'exit_to_app',
    routerLink: '/signout',
  },
];
