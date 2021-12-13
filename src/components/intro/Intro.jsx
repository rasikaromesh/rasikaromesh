import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,

      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Blogger'],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="imageContainer">
        <img src={window.location.origin + '/assets/ProPic.jpeg'} alt="" />
      </div>
      <div className="hi">Hi.</div>
      <div className="hiShadow"></div>
      <div className="wrapper">
        <h2>I am Romesh Dhananjaya</h2>
        <h3>
          I am a <span ref={textRef}></span>
        </h3>
      </div>
    </div>
  );
}
