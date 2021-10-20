import './blogPost.scss';
import Posts from '../../data/posts';
import slate from '@react-page/plugins-slate';
import image from '@react-page/plugins-image';
import Editor from '@react-page/editor';
import spacer from '@react-page/plugins-spacer';
import divider from '@react-page/plugins-divider';
import { useParams } from 'react-router';
import { CopyBlock, dracula } from 'react-code-blocks';

import { useState } from 'react';

const cellPlugins = [slate(), image, spacer, divider];

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
      <div className="title">{post.title}</div>
      <div className="body">
        <Editor cellPlugins={cellPlugins} value={post} readOnly={true} />
      </div>
    </div>
  );
}
