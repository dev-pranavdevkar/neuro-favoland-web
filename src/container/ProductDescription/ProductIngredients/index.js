//Ant Design
import { Col, Row } from 'antd';

//Styles
import styles from './styles.module.css';

//Data
// Const ingredientsItem = [
// 	{ id: 1, ingredient: 'Dimethicone', source: 'USA' },
// 	{ id: 1, ingredient: 'Isoeicosa', source: 'Belgium' },
// 	{ id: 1, ingredient: 'Kaolin', source: 'Russia' },
// 	{ id: 1, ingredient: 'Ceresin', source: 'USA' },
// 	{ id: 1, ingredient: 'Paraffin', source: 'Vietnam' },
// 	{ id: 1, ingredient: 'Isononyl Isononanoate', source: 'France' },
// 	{ id: 1, ingredient: 'Microcrystaline Wax', source: 'Sweden' },
// 	{ id: 1, ingredient: 'Titanium Dioxide', source: 'USA' },
// 	{ id: 1, ingredient: 'Cera Microcristallina', source: 'Brazil' },
// 	{ id: 1, ingredient: 'Red 5 Lake', source: 'USA' },
// ];

export default function ProductIngredients({ prodcutDetail }) {
	return (
		<Row className={styles.productIngredients}>
			<Col span={5} xs={24} sm={8} className={styles.leftSide}>
				<strong>Ingredients</strong>
				{prodcutDetail?.ingredients?.map((item, index) => {
					return (
						<p
							key={index}
							style={{
								fontSize: '16px',
								fontWeight: '500',
								textTransform: 'capitalize',
							}}
						>
							{item}
						</p>
					);
				})}
			</Col>
			{/* <Col span={5} xs={24} sm={8} className={styles.rightSide}>
				<strong>Sourced from</strong>
				{ingredientsItem.map((item) => {
					return <p key={item.id}>{item.source}</p>;
				})}
			</Col> */}
		</Row>
	);
}
