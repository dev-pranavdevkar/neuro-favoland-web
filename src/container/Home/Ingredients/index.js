//Nextjs Components
import Link from 'next/link';

//Ant Design
import { Col, Row } from 'antd';

//Components
import IngredientsCard from '@/src/components/Card/IngredientsCard';

//Style
import styles from './styles.module.css';

//Data
const ingredient = [
	{
		id: 1,
		name: 'Alcohol',
		productCount: '245',
	},
	{
		id: 2,
		productCount: '245',
		name: 'Amino Acids',
	},
	{
		id: 3,
		productCount: '245',
		name: 'Antioxidant ',
	},
	{
		id: 4,
		productCount: '245',
		name: 'Alpha Arbutin ',
	},
	{
		id: 5,
		productCount: '245',
		name: 'Benzoyl Peroxide ',
	},
	{
		id: 6,
		productCount: '245',
		name: 'BHA',
	},
	{
		id: 6,
		productCount: '245',
		name: 'Blackheads',
	},
	{
		id: 6,
		productCount: '245',
		name: 'Caffeine',
	},
	{
		id: 6,
		productCount: '245',
		name: 'Cannabidiol (CBD)',
	},
	{
		id: 6,
		productCount: '245',
		name: 'Ceramides',
	},
	{
		id: 6,
		productCount: '245',
		name: 'CoQ10',
	},
	{
		id: 6,
		productCount: '245',
		name: 'Collagen',
	},
];
export default function Ingredients() {
	return (
		<>
			<h2 className={styles.h2}>Shop by ingredients</h2>
			<Row className="mt-2">
				{ingredient.map((item) => {
					return (
						<Col key={item.id}>
							<IngredientsCard
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
