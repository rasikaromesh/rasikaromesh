import './blogPost.scss';
import Posts from '../../data/posts';
import { useParams } from 'react-router';
import { CopyBlock, dracula } from 'react-code-blocks';

export default function BlogPost() {
  let { id } = useParams();
  const post = Posts[id - 1];
  const renderBody = (data) => {
    let { type, text, url, alignment } = data;
    if (type === 'code') {
      return (
        <div className="code">
          <CopyBlock text={text} theme={dracula} language="java" codeBlock />
        </div>
      );
    } else if (type === 'image') {
      return (
        <div className={'image ' + resolveImgaeAlignment(alignment)}>
          <img src={url} alt="" />
        </div>
      );
    }
    return <p className="paragraph">{text}</p>;
  };

  const resolveImgaeAlignment = (alignment) => {
    if (!alignment) {
      return '';
    }
    if (alignment === 'right') {
      return 'right';
    } else {
      return 'center';
    }
  };
  return (
    <div className="blog-post">
      <div className="image">
        <img src={post.thumbnail} alt="" />
      </div>
      <div className="title">{post.title}</div>
      <div className="body">{post.body.map((item) => renderBody(item))}</div>
    </div>
  );
}
