import { useHistory } from 'react-router';
import './blogPostCard.scss';
import Tag from './Tag/Tag';
export default function BlogPostCard({ date, title, summery, tags, onClick }) {
  console.log(onClick);
  let history = useHistory();
  const onClickHandler = () => {
    onClick();
  };
  return (
    <div className="blog-post-card" onClick={onClickHandler}>
      <div className="left">
        <span className="year">{date.year}</span>
        <span className="day">{date.day}</span>
        <span className="month">{date.month}</span>
      </div>
      <div className="right">
        <div className="title">{title}</div>
        <div className="summery">{summery}</div>
        <div className="tags">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
}
