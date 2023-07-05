//Nextjs Components

//Ant Design

//Styles
import styles from './styles.module.css';

export default function IngredientsCard(props) {
	const { productCount, name } = props;
	return (
		<>
			<div className={styles.card} hoverable style={{ padding: 0 }}>
				<h3 className='productName'>{name}</h3>
				<p className='product-desc'>{productCount} Products</p>
			</div>
		</>
	);
}
