import './blogPost.scss';

import { CopyBlock, dracula } from 'react-code-blocks';
import { useLocation } from 'react-router-dom';

export default function BlogPost() {
  const { state } = useLocation();

  const renderBody = ({ type, text, children }) => {
    if (type === 'code') {
      return (
        <div key={generateReandomIndex()} className="code">
          <CopyBlock text={text} theme={dracula} language="java" codeBlock />
        </div>
      );
    } else if (type === 'h2') {
      return (
        <h2 key={generateReandomIndex()} className="h3">
          {text}
        </h2>
      );
    } else if (type === 'u-list') {
      let listItems = (text, children) => {
        if (text) {
          return <li key={generateReandomIndex()}>{renderList(text)}</li>;
        } else if (children) {
          return children.map((child) => (
            <li key={generateReandomIndex()}>
              {child.text}
              {child.children.map((child2) => renderBody(child2))}
            </li>
          ));
        }
      };
      let uList = (
        <div key={generateReandomIndex()}>
          <ul>{listItems(text, children)}</ul>
        </div>
      );
      return uList;
    } else if (type === 'list-item') {
      let listItem = renderList(text);
      if (children) {
        renderBody(children);
      } else {
        return listItem;
      }
    }
    return (
      <div key={generateReandomIndex()} className="paragraph-section">
        {renderParagraph(text)}
      </div>
    );
  };

  const renderList = (items) => {
    return items.map((item, index) => {
      return <li key={index}>{item}</li>;
    });
  };

  const renderParagraph = (items) => {
    if (Array.isArray(items)) {
      return items.map((item) => {
        return (
          <p key={generateReandomIndex()} className="paragraph">
            {item}
          </p>
        );
      });
    } else {
      return <p>{items}</p>;
    }
  };

  const generateReandomIndex = () => {
    return new Date().getTime() + Math.floor(Math.random() * 100000);
  };

  return (
    <div className="blog-post">
      <div className="image">
        <img src={state.url} alt="" />
      </div>
      <div className="title">{state.post.title}</div>
      <div className="body">
        {state.post.body.map((item) => renderBody(item))}
      </div>
    </div>
  );
}
