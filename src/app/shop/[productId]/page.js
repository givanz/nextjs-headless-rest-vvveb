import rest from '../../../lib/functions';
//export const dynamicParams = true;

export async function generateStaticParams() {
	const products = await rest('products', false);

	const ids = products.map((product) => ({
		productId: product.product_id.toString(),
	}));

	return ids;
}

async function getSingleProduct(productId) {
	const product = await rest(`products/${productId}?image_size=large`);
	return product;
}

const page = async ({ params }) => {
	const { productId } = await params;
	const product = await getSingleProduct(productId);

	if (!product) {
		return <div>Loading...</div>;
	}

	return (
		<div className="product-page">
			<h1>{product.name}</h1>

			<strong>{product.price}</strong>

			
			<img className="img-fluid w-100 align-center" src={`${process.env.VVVEB_URL}/media/${product.image}`}/>

			<div className="product">
				<p dangerouslySetInnerHTML={{ __html: product.content }}></p>
			</div>
		</div>
	);
};

export default page;
