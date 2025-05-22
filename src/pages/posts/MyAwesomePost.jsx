import './Post.css';

export default function MyAwesomeBlogPost() {
  return (
    <div className="post-detail-container">
      <h1>My Awesome Blog Post</h1>
      {/* You might want to add a paragraph for metadata like date here, e.g., <p className="post-meta">May 21, 2025</p> */}
      <div className="post-content">
        <p>Full content goes here...</p>
      </div>
    </div>
  );
}