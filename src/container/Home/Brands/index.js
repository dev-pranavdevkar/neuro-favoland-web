//Nextjs Components
import Link from 'next/link';

//Ant Design
import { Col, Row } from 'antd';

//Components
import BrandsCard from '@/src/components/Card/BrandsCard';

//Style
import styles from './styles.module.css';

//Data
const categories = [
	{
		id: 1,
		image: '/images/brands/brand1.png',
		name: 'Calvin Klein',
		productCount: '26',
	},
	{
		id: 2,
		image: '/images/brands/brand2.png',
		productCount: '26',
		name: 'Yves Saint Laurent',
	},
	{
		id: 3,
		image: '/images/brands/brand3.png',
		productCount: '26',
		name: 'Tommy Hilfiger ',
	},
	{
		id: 4,
		image: '/images/brands/brand4.png',
		productCount: '26',
		name: 'Redken',
	},
	{
		id: 5,
		image: '/images/brands/brand5.png',
		productCount: '26',
		name: 'Chanel',
	},
	{
		id: 6,
		image: '/images/brands/brand6.png',
		productCount: '26',
		name: 'Hinode',
	},
	{
		id: 7,
		image: '/images/brands/brand7.png',
		productCount: '26',
		name: 'Eudora',
	},
	{
		id: 8,
		image: '/images/brands/brand8.png',
		productCount: '26',
		name: 'L’Oreal',
	},
	{
		id: 9,
		image: '/images/brands/brand9.png',
		productCount: '26',
		name: 'Mary Kay',
	},
	{
		id: 10,
		image: '/images/brands/brand10.png',
		productCount: '26',
		name: 'Nivea',
	},
	{
		id: 11,
		image: '/images/brands/brand11.png',
		productCount: '26',
		name: 'Herbalife',
	},
	{
		id: 12,
		image: '/images/brands/brand12.png',
		productCount: '26',
		name: 'Givenchy',
	},
];
export default function Brands() {
	return (
		<>
			<h2 className="section-title">Shop by Brands</h2>
			<Row className="mt-2">
				{categories?.map((item) => {
					return (
						<Col key={item.id}>
							<BrandsCard
								image={item?.image}
								productCount={item?.productCount}
								name={item?.name}
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
