//Nextjs Components
import Link from 'next/link';

//Ant Design
import { Col, Row } from 'antd';

//Components

//Style
import StaticProductsCard from '@/src/components/Card/StaticProductCard';
import styles from './styles.module.css';

//Data
const products = [
	{
		id: 1,
		image: '/images/products/product13.png',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
		rating: '682',
		price: '20',
	},
	{
		id: 2,
		image: '/images/products/product14.png',
		rating: '682',
		price: '20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
	{
		id: 3,
		image: '/images/products/product15.png',
		rating: '682',
		price: '20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
	{
		id: 4,
		image: '/images/products/product16.png',
		rating: '682',
		price: '20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
	{
		id: 5,
		image: '/images/products/product17.png',
		rating: '682',
		price: '20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
	{
		id: 6,
		image: '/images/products/product18.png',
		rating: '682',
		price: '20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
	{
		id: 7,
		image: '/images/products/product19.png',
		rating: '682',
		price: '20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
	{
		id: 8,
		image: '/images/products/product20.png',
		rating: '682',
		price: '20',
		name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
	},
];

export default function TopDeals() {
	return (
		<>
			<h2 className="section-title">Top Deals</h2>
			<Row className="mt-2">
				{products?.map((item) => {
					return (
						<Col span={6}  key={item.id}>
							<StaticProductsCard
								images={item?.image}
								rating={item?.rating}
								price={item?.price}
								name={item?.name}
								productId={item?.id}
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
