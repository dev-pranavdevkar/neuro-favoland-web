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
		image: '/images/products/product2.png',
		name: 'Skincare',
		productCount: '245',
	},
	{
		id: 2,
		image: '/images/products/product6.png',
		productCount: '245',
		name: 'Haircare',
	},
	{
		id: 3,
		image: '/images/products/product9.png',
		productCount: '245',
		name: 'Tools ',
	},
	{
		id: 4,
		image: '/images/products/product10.png',
		productCount: '245',
		name: 'Fragrance',
	},
	{
		id: 5,
		image: '/images/products/product11.png',
		productCount: '245',
		name: 'Brushes',
	},
	{
		id: 6,
		image: '/images/products/product12.png',
		productCount: '245',
		name: 'Makeup',
	},
];
export default function Categories() {
	return (
		<>
			
			<h2 className="section-title">Shop by categories</h2>
			<Row className="mt-2">
				{categories.map((item) => {
					return (
						<Col span={4} key={item.id}>
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

			
			{/* <div className='row' key={item.id}>
				{categories.map((item) => { 
					<div className='col-lg-2'>
						
							<CategoriesCard
								image={item.image}
								productCount={item.productCount}
								name={item.name}
							/>
						
					
					</div>
					})}
				</div> */}
		</>
	);
}
