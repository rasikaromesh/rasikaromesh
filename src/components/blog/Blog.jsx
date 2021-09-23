import BlogPostCard from './BlogPostCard/BlogPostCard';

export default function Blog() {
  var date = {
    year: '2021',
    month: 'September',
    day: '29',
  };
  var title = 'The standard Lorem Ipsum passage, used since the 1500s';
  var summery =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l';
  var tags = ['Java', 'Node', 'Python'];
  return (
    <div>
      <h1>Blog</h1>
      <BlogPostCard date={date} title={title} summery={summery} tags={tags} />
      {/* <BlogPostCard />
      <BlogPostCard /> */}
    </div>
  );
}
