//Nextjs Components
// import Image from 'next/image';
import Link from 'next/link';

//Ant Design
import { Typography } from 'antd';
const { Text } = Typography;

//Styles
import styles from './styles.module.css';

//Components
import Rating from '../Rating';

export default function ProductsCard(props) {
	const { productId, images, rating, price, name } = props;
	return (
		<>
			<Link href={`/products/${productId}`} className={styles.link}>
				<div className={styles.card} hoverable style={{ padding: 0 }}>
					<img
						src={images}
						alt={name}
						sizes="100vw" width={290} height={290}
					
					/>
					<h3 className='productName'>{name}</h3>
					<Rating className={styles.price}  rating={rating} />
					<Text className={styles.price}>({rating})</Text>

					<div>
					
						<Text className={styles.price}>$<b>{price} </b></Text>
						<Text className={styles.text}> onwards</Text>
					</div>
				</div>
			</Link>
			{/* <>
			<div className={styles.card} hoverable style={{ padding: 0 }}>
				<Image src={images} alt={name} sizes="100vw" width={180} height={180} />
				<h3>{name}</h3>

				<p>{name} Products</p>
			</div>
		</> */}
		</>
	);
}
