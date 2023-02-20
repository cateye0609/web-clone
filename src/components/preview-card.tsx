import { formatNumber } from "../utils/common";
import "./preview-card.scss"

export interface PreviewCardModel {
	id: number;
	name: string;
	image: string;
	availableQuantity: number;
	price: number;
	discountPercent: number;
}

interface PreviewCardProps {
	data: PreviewCardModel;
}

export default function PreviewCard(props: PreviewCardProps) {
	return (
		<>
			<div className="preview-card">
				<img src={props.data.image}
					alt="preview_img" className="preview-img" />
				<h4 className="preview-title">
					{props.data.name}
				</h4>
				<p className="preview-quantity">Còn 3 sản phẩm</p>
				<p className="preview-price">
					{formatNumber(props.data.price - (props.data.price * props.data.discountPercent / 100))}đ
				</p>
				<p className={`preview-price-original ${props.data.discountPercent > 0 ? '' : 'invisible'}`}>
					<span>{formatNumber(props.data.price)}</span>
					<span className="preview-discount">-{props.data.discountPercent}%</span>
				</p>
				<button className="preview-button">
					Thêm vào giỏ
				</button>
			</div>
		</>
	);
}