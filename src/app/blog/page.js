import Link from 'next/link';
import rest from '../../lib/functions';

async function getPosts() {
	const posts = await rest('posts?type=post&page=1');
	return posts;	
}

const BlogPage = async () => {
	const posts = await getPosts();

	return (
		<div className="blog-page">
			<h2>All Blog Posts</h2>
			<p>All blog posts are fetched from Vvveb via the REST API.</p>
			<div className="posts">
				{posts.map((post) => {
					return (
						<Link href={`/blog/${post.slug}`} className="post" key={post.slug}>
							<h3>{post.name}</h3>
							<img className="img-fluid w-100 align-center" src={post.image ? `${process.env.VVVEB_URL}/${post.image}` : ''}/>
							<div
								dangerouslySetInnerHTML={{ __html: post.excerpt ? post.excerpt : post.content.substr(0, 100) }}
							></div>
							
							<span>Read more &raquo;</span>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default BlogPage;
