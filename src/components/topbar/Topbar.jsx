import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons";
import SocialButtons from "../common/socialButtons/SocialButtons"

export default function Topbar({menuOpen, setMenuOpen}) {
    // console.log(data);
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Romesh Dhananjaya</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>+65 81226123</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>romesh.d.sg@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                <div>
                    <SocialButtons/>
                </div>
                {/* <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div> */}
                </div>
            </div>
        </div>
    )
}
