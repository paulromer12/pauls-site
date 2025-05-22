import React from 'react';
import './Posts.css';

const posts = [
	{
		id: 'post-1',
		title: 'My Awesome Blog Post',
		summary:
			'A summary of what this post is about. This is a test of what it will look like with a longer summary.',
		date: 'October 27, 2023',
		slug: 'my-awesome-blog-post',
	},
	// {
	// 	id: 'post-2',
	// 	title: 'Another Interesting Article',
	// 	summary: 'Exploring further topics and ideas.',
	// 	date: 'October 28, 2023',
	// 	slug: 'another-interesting-article',
	// },
	// Add new posts here:
	// {
	//   id: 'post-3',
	//   title: 'New Post Title',
	//   summary: 'Short summary of the post.',
	//   date: 'Month Day, Year',
	//   slug: 'new-post-title',
	// },
];

export default function Posts() {
	return (
		<div className="posts-container container">
			<h2 className="posts-main-title">Posts</h2>
			<div className="posts-list">
				{posts.map((post) => (
					<a
						key={post.id}
						href={`#/posts/${post.slug}`}
						className="post-card-link"
					>
						<article className="post-card">
							<h4>{post.title}</h4>
							<p>{post.summary}</p>
							<p>
								<small>{post.date}</small>
							</p>
						</article>
					</a>
				))}
			</div>
		</div>
	);
}