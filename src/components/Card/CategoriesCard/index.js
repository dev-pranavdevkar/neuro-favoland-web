//Nextjs Components
import Image from 'next/image';

//Ant Design

//Styles
import styles from './styles.module.css';

export default function CategoriesCard(props) {
	const { image, productCount, name } = props;
	return (
		<>
			<div className={styles.card} hoverable style={{ padding: 0 }}>
				<Image src={image} alt={name} sizes="100vw" width={180} height={180} />
				<h3>{name}</h3>

				<p>{productCount} Products</p>
			</div>
		</>
	);
}
