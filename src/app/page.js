import Link from 'next/link';

const page = () => {
	return (
		<div className="hero">
			<h2>Next.js + Headless Vvveb</h2>
			<p>
				Next.js integration with Vvveb Rest Api.
			</p>
			
			
			<Link href="/blog" className="btn">
				Read Blog Posts
			</Link>

			&ensp;
			
			<a href="https://plugins.vvveb.com/product/openapi" target="_blank">Install OpenAPI plugin</a>

		</div>
	);
};

export default page;
