import './topbar.scss';
import { Person, Mail } from '@material-ui/icons';
import SocialButtons from '../common/socialButtons/SocialButtons';

export default function Topbar() {
  return (
    <div className="topbar ">
      <div className="wrapper">
        <div className="left">
          <a href="/" className="logo">
            Romesh Dhananjaya
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+65 81226123</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>romesh.d.sg@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div>
            <SocialButtons />
          </div>
        </div>
      </div>
    </div>
  );
}
