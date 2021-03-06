import { Component, Input } from '@angular/core';
import { Avatar, EMPTY_AVATAR, MenuItem } from '@sage-bionetworks/sage-angular/src/public-api';

@Component({
  selector: 'sage-page',
  templateUrl: './page.html',
  styleUrls: ['./page.scss'],
})
export default class PageComponent {
  @Input() title = 'App Title';
  @Input() sections = {};
  @Input() signedIn = false;
  @Input() userAvatar: Avatar = EMPTY_AVATAR;
  @Input() userMenuItems: MenuItem[] = [];

  // @Input()
  // version = '2.0.0';

  // @Output()
  // onLogin = new EventEmitter<Event>();

  // @Output()
  // onLogout = new EventEmitter<Event>();

  // @Output()
  // onCreateAccount = new EventEmitter<Event>();
}

// export const Page = ({ version }) => (
//   // <article>
//   //   <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

// );
// Page.propTypes = {
//   user: PropTypes.shape({}),
//   onLogin: PropTypes.func.isRequired,
//   onLogout: PropTypes.func.isRequired,
//   onCreateAccount: PropTypes.func.isRequired,
// };

// Page.defaultProps = {
//   user: null,
// };
