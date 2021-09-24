import './blogPostCard.scss';
import Tag from './Tag/Tag';
export default function BlogPostCard({ date, title, summery, tags, onClick }) {
  console.log(onClick);
  const onClickHandler = () => {
    onClick();
  };
  return (
    <div className="blog-post-card">
      <div className="left" onClick={onClickHandler}>
        <span className="year">{date.year}</span>
        <span className="day">{date.day}</span>
        <span className="month">{date.month}</span>
      </div>
      <div className="right">
        <div className="title" onClick={onClickHandler}>
          {title}
        </div>
        <div className="summery" onClick={onClickHandler}>
          {summery}
        </div>
        <div className="tags">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
