// Ant Design
import { Alert, Col, Row } from 'antd';

// Components
import ProductsCard from '@/src/components/Card/ProductsCard';

// Styles
import styles from './styles.module.css';

export default function SearchedProdcuts(props) {
	const { searchResult } = props;

	return (
		<>
			<Row gutter={16} className={styles.container}>
				<Col span={24}>
					<h1>Search Results</h1>
				</Col>
				<Row
					span={8}
					style={{
						marginTop: 10,
					}}
				>
					{searchResult?.length === 0 && (
						<Alert
							
							description="Data not found"
							type="warning"
						/>
					)}
					<Row>
						{searchResult?.map((item) => {
							return (
								<Col key={item.id}>
									<ProductsCard
										images={item.images[0]}
										rating={item.rating}
										price={item.price}
										name={item.name}
										productId={item._id}
									/>
								</Col>
							);
						})}
					</Row>
				</Row>
			</Row>
		</>
	);
}
