import Intro from '../intro/Intro';
import Card from '../common/card/Card';
import Blog from '../blog/Blog';

export default function MainPage() {
  return (
    <div>
      <Intro />
      <div className="cardWrapper">
        {/* <Card /> */}
        <Blog />
        {/* <BlogPost></BlogPost> */}
      </div>
    </div>
  );
}
