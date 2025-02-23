import Link from 'next/link';
import rest from '../../lib/functions';

async function getProducts() {
	const products = await rest('products?type=product&page=1');
	return products;	
}

const ShopPage = async () => {
	const products = await getProducts();

	return (
		<div className="shop-page">
			<h2>All Products</h2>
			<p>All products are fetched from Vvveb via the REST API.</p>
			<div className="products">
				{products.map((product) => {
					return (
						<div className="product" key={product.product_id}>
							<Link href={`/shop/${product.product_id}`}>
								<h3>{product.name}</h3>
								<img className="img-fluid w-100 align-center" src={`${process.env.VVVEB_URL}/${product.image}`}/>
								<p
									dangerouslySetInnerHTML={{ __html: product.excerpt ? product.excerpt : product.content.substr(0, 100) }}
								></p>
								
							</Link>

							<div>
								<strong>{product.price}</strong>
							</div>
							
							<a href={`/cart/${product.product_id}`} className="btn" key={product.product_id}>Add to cart</a>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ShopPage;
