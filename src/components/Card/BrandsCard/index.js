//Nextjs Components
import Image from 'next/image';

//Ant Design

//Styles
import styles from './styles.module.css';

export default function BrandsCard(props) {
	const { image, productCount, name } = props;
	return (
		<>
			<div className={styles.card} hoverable style={{ padding: 0 }}>
				<Image src={image} alt={name} sizes="100vw" width={180} height={24} />
				<h3 className="productName">{name}</h3>
				<p className="product-desc"> {productCount} Products</p>
			</div>
		</>
	);
}
