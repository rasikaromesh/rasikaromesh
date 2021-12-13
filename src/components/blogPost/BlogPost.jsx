import './blogPost.scss';
import Posts from '../../data/posts';
import { useParams } from 'react-router';
import { CopyBlock, dracula } from 'react-code-blocks';

export default function BlogPost() {
  let { id } = useParams();
  const post = Posts[id - 1];
  const renderBody = ({ type, text }) => {
    if (type === 'code') {
      return (
        <div className="code">
          <CopyBlock text={text} theme={dracula} language="java" codeBlock />
        </div>
      );
    }
    return <p className="paragraph">{text}</p>;
  };
  return (
    <div className="blog-post">
      <div className="image">
        <img src="https://picsum.photos/400" alt="" />
      </div>
      <div className="title">{post.title}</div>
      <div className="body">{post.body.map((item) => renderBody(item))}</div>
    </div>
  );
}
