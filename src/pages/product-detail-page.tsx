import PreviewCard from "../components/preview-card";
import { formatNumber } from "../utils/common";
import "./product-detail-page.scss";

export default function ProductDetailPage() {
	const product = {
		"id": 1,
		"name": "Laptop ASUS VivoBook 14 A412FA-EK734T (14\" FHD/i5-10210U/8GB/512GB SSD/Intel UHD)",
		"image": "https://lh3.googleusercontent.com/OPNIaDml5ZTh9653Gqtxc8BaWFqHZmSjaMs0ou321y3YWNR_68HybgMlVsflBN147gok7WxnsmrB7rKq9Z4a1mhnaS2lSYUPMA=rw-w300",
		"price": 25800000,
		"discountPercent": 10,
		"seller": "Xiaomi",
		"relatedProducts": [
			{
				"id": 2,
				"name": "Laptop Lenovo (14\" 4GB/128GB SSD/Intel UHD)",
				"image": "https://lh3.googleusercontent.com/TvxcE7fes0NtPyjDUqmvVlbdgj63tujZtJCroBtrrMXu1j-MC1Rns56ia6z2USjinoa5gp_GfbthX5BRThBHEdBXFbWXBQ4K=rw-w300",
				"availableQuantity": 3,
				"price": 12000000,
				"discountPercent": 5
			},
			{
				"id": 3,
				"name": "Apple Macbook Pro 16 inch Retina display",
				"image": "https://lh3.googleusercontent.com/TsvY9ecw4JYAwF0Ez-M5h_xc1qtX2bwLS21Zc_CbKy_qgIB0OEkbSnEREiXqxZEgnaPCyhLvSh04q7Z1GQlRFeyh5sprWto=rw-w300",
				"discountPercent": 0,
				"availableQuantity": 4,
				"price": 15190000,
			},
			{
				"id": 4,
				"name": "Laptop Dell (16\" 8GB/256GB SSD/Intel UHD)",
				"image": "https://lh3.googleusercontent.com/awNX33cUhBXFLT7Wv9aNBfKo9wiwiwLgPi2JfNgZKHGWTmYZ1N5AMQNE4HZT2AuZMZ1zX2Exk7UwQ0d-irm_sjcUwClzZTlW=rw-w300",
				"discountPercent": 0,
				"availableQuantity": 3,
				"price": 19000000
			}
		]
	}
	return (
		<>
			<div className="product-card">
				<img src={product.image} alt="product_img" className="product-img" />
				<div className="product-info">
					<p className="product-price">{formatNumber(product.price - (product.price * product.discountPercent / 100))}đ</p>
					<p className="product-price-original">
						<span>{formatNumber(product.price)}đ </span>
						<span className="product-discount">-{product.discountPercent}%</span>
					</p>
					<h2 className="product-name">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit.
						Nostrum voluptas exercitationem aspernatur sapiente voluptates totam, optio
					</h2>
					<p className="product-brand">By <a href="##">XIAOMI</a></p>
					<div className="product-related">
						<p className="product-related-title">Các sản phẩm liên quan</p>
						<div className="product-related-group">
							{product.relatedProducts.map(item => <PreviewCard data={item} key={`preview-${item.id}`} />)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}