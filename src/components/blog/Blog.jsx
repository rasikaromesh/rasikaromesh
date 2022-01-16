import { useHistory } from 'react-router';
import { useState, useEffect } from 'react';

import fetchAllPosts from '../../services/PostService';
import getThumbnailImage from '../../services/ImageService';

import BlogPostCard from './BlogPostCard/BlogPostCard';

export default function Blog() {
  let history = useHistory();
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchFuction = async () => {
      const incomingPosts = await fetchAllPosts();
      console.log(incomingPosts.data);
      setPosts(incomingPosts.data);
    };
    fetchFuction();
  }, []);

  const onClickHandler = async (post) => {
    const response = await getThumbnailImage(post.thumbnailImage);
    console.log(response);
    history.push({
      pathname: `/post/${post.id}`,
      state: { post, url: response.data.url },
    });
  };
  return (
    <div>
      <h1>Blog</h1>
      {posts
        ? posts.map((post) => (
            <BlogPostCard
              onClick={() => onClickHandler(post)}
              key={post.id}
              date={post.date}
              title={post.title}
              summery={post.summery}
              tags={post.tags}
            />
          ))
        : 'No posts available'}
    </div>
  );
}
