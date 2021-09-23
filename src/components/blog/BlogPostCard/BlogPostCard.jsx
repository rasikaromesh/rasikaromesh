import './blogPostCard.scss';

export default function BlogPostCard() {
  return (
    <div className="blog-post-card">
      <div className="left">
        <span className="year">2021</span>
        <span className="day">29</span>
        <span className="month">September</span>
      </div>
      <div className="right">
        <div className="title">Blog post Title</div>
        <div className="summery">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi{' '}
        </div>
        <div className="tags">
          <div className="tag">java</div>
          <div className="tag">java</div>
          <div className="tag">java</div>
        </div>
      </div>
    </div>
  );
}
