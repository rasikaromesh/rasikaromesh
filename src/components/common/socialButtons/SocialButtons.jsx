import "./socialButtons.scss"
import { LinkedIn, Twitter } from "@material-ui/icons";

export default function SocialButtons() {
    return (
        <div className="socialButton">
            <a href="https://www.linkedin.com/in/romeshdhananjaya/" target="_blank" rel="noreferrer noopener"><span><LinkedIn/></span></a>
            <a href="https://twitter.com/RskRoma" target="_blank" rel="noreferrer noopener"><span><Twitter/></span></a>
        </div>
    )
}
