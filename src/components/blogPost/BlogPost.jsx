import './blogPost.scss';
import Posts from '../../data/posts';

import { useParams } from 'react-router';

// const cellPlugins = [slate(), image, spacer, divider];

export default function BlogPost() {
  let { id } = useParams();
  const post = Posts[id - 1];
  return (
    <div className="blog-post">
      <div className="title">{post.title}</div>
      <div className="body">Blog Post</div>
    </div>
  );
}
