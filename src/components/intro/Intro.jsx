import "./intro.scss"
import {init} from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {

    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            
            backDelay: 1500,
            backSpeed: 60,
            strings: ["Developer", "Designer", "Contet Creater"],
        })

    }, [])
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imageContainer">
                    <img src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.6435-9/67284195_1134767823373025_8238708848186097664_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=HYTDGsZR05EAX8TQjE5&_nc_ht=scontent-sin6-1.xx&oh=464f2d3bca08cf00167c59b657755816&oe=616FD8B1" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>
                        Hi There, I'm
                    </h2>
                    <h1>Romesh Dhananjaya</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
            
        </div>
    )
}
