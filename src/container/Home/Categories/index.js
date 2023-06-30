//Nextjs Components
import Link from 'next/link';

//Ant Design
import { Col, Row } from 'antd';

//Components
import CategoriesCard from '@/src/components/Card/CategoriesCard';

//Style
import styles from './styles.module.css';

//Data
const categories = [
	{
		id: 1,
		image: '/images/products/product1.png',
		name: 'Skincare',
		productCount: '245',
	},
	{
		id: 2,
		image: '/images/products/product2.png',
		productCount: '245',
		name: 'Haircare',
	},
	{
		id: 3,
		image: '/images/products/product3.png',
		productCount: '245',
		name: 'Tools ',
	},
	{
		id: 4,
		image: '/images/products/product4.png',
		productCount: '245',
		name: 'Fragrance',
	},
	{
		id: 5,
		image: '/images/products/product5.png',
		productCount: '245',
		name: 'Brushes',
	},
	{
		id: 6,
		image: '/images/products/product6.png',
		productCount: '245',
		name: 'Makeup',
	},
];
export default function Categories() {
	return (
		<>
			
			<h2 className={styles.h2}>Shop by categories</h2>
			<Row className="mt-2">
				{categories.map((item) => {
					return (
						<Col key={item.id}>
							<CategoriesCard
								image={item.image}
								productCount={item.productCount}
								name={item.name}
							/>
						</Col>
					);
				})}

				<Col span={24} className={styles.viewallContainer}>
					<Link className={styles.viewall} href={'#'}>
						View All
					</Link>
				</Col>
			</Row>
		</>
	);
}
