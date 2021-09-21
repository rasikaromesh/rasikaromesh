import "./topbar.scss"
import { Person, Mail } from "@material-ui/icons";
// import data from "./topbar.json"

export default function Topbar({menuOpen, setMenuOpen}) {
    // console.log(data);
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">fdsf</a>
                    <div className="itemContainer">
                        <Person className="icon"/>
                        <span>flsdf</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>fsdlfjldsf</span>
                    </div>
                </div>
                <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
                </div>
            </div>
        </div>
    )
}
