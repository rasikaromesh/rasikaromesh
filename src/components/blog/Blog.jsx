import BlogPostCard from './BlogPostCard/BlogPostCard';
import posts from '../../data/posts';
import { useHistory } from 'react-router';

export default function Blog() {
  let history = useHistory();
  const onClickHandler = (id) => {
    console.log(id);
    history.push(`/post/${id}`);
  };
  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post) => (
        <BlogPostCard
          onClick={() => onClickHandler(post.id)}
          key={post.id}
          date={post.date}
          title={post.title}
          summery={post.summery}
          tags={post.tags}
        />
      ))}
    </div>
  );
}
