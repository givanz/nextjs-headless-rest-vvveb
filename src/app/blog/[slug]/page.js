import rest from '../../../lib/functions';
//export const dynamicParams = true;

export async function generateStaticParams() {
	const posts = await rest('posts', false);

	const slugs = posts.map((post) => ({
		slug: post.slug,
	}));

	return slugs;
}

async function getSinglePost(slug) {
	const post = await rest(`posts/${slug}?image_size=large`);
	return post;
}

const page = async ({ params }) => {
	const { slug } = await params;
	const post = await getSinglePost(slug);

	if (!post) {
		return <div>Loading...</div>;
	}

	return (
		<div className="post-page">
			<h1>{post.name}</h1>

			<ul className="post-meta">
				<li className="post-author meta-wrapper">
						<span className="meta-icon">
							<span className="screen-reader-text">Post author</span>
								<i className="la la-user"></i>
							</span>
						<span className="meta-text">
							By <a href="#" href={post.author_url}><span>{post.display_name}</span></a>						
						</span>
					</li>
					
					<li className="post-date meta-wrapper">
						<span className="meta-icon">
							<span className="screen-reader-text">Post date</span>

								<i className="la la-calendar"></i>
							</span>
						<span className="meta-text">
							<a href="#"><span>{post.created_at}</span></a>
						</span>
					</li>
						<li className="post-comment-link meta-wrapper">
						<span className="meta-icon">
							<i className="la la-comment"></i>
						</span>
						<span className="meta-text">
							<a href="#comments"><span>{post.comment_text}</span></a>
						</span>
					</li>
					
			</ul>
			
			<img className="img-fluid w-100 align-center" src={`${process.env.VVVEB_URL}/media/${post.image}`}/>

			<div className="blog-post">
				<p dangerouslySetInnerHTML={{ __html: post.content }}></p>
			</div>
		</div>
	);
};

export default page;
