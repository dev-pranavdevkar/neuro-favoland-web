//Ant Design
import { LeftOutlined } from '@ant-design/icons';
import { Row } from 'antd';

//Next js
import Link from 'next/link';

//Components
import Footer from '@/src/components/common/layout/Footer';
import Credentials from './Credentials';
import Features from './Features';
import ProductInfo from './ProductInfo';
import ProductIngredients from './ProductIngredients';
import SimilarProducts from './SimilarProducts';

//Style
import { useEffect, useState } from 'react';
import styles from './styles.module.css';

export default function StaticProductDes(props) {
	const { productId } = props;
	const [prodcutDetail, setProductDetail] = useState();

	const specificProdcut = async (productId) => {
		const products = [
			{
				id: '1',
				images: ['/images/products/product1.png'],
				description: 'Product description',
				name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
				rating: '682',
				price: '$20',
			},
			{
				id: '2',
				images: ['/images/products/product2.png'],
				rating: '682',
				price: '$20',
				description: 'Product description',
				name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
			},
			{
				id: '3',
				images: ['/images/products/product3.png'],
				rating: '682',
				price: '$20',
				description: 'Product description',
				name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
			},
			{
				id: '4',
				images: ['/images/products/product4.png'],
				rating: '682',
				price: '$20',
				description: 'Product description',
				name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
			},
			{
				id: '5',
				images: ['/images/products/product5.png'],
				rating: '682',
				price: '$20',
				description: 'Product description',
				name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
			},
			{
				id: '6',
				images: ['/images/products/product6.png'],
				rating: '682',
				price: '$20',
				description: 'Product description',
				name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
			},
			{
				id: '7',
				images: ['/images/products/product7.png'],
				rating: '682',
				price: '$20',
				description: 'Product description',
				name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
			},
			{
				id: '8',
				images: ['/images/products/product8.png'],
				rating: '682',
				price: '$20',
				description: 'Product description',
				name: 'Bobbi Brown Crushed Shine Jelly Stick Lipstick',
			},
		];
		const product = products.find((product) => product.id === productId);
		setProductDetail(product);
	};

	useEffect(() => {
		if (productId !== undefined) {
			specificProdcut(productId);
		}
	}, [productId]);

	return (
		<div className={styles.container}>
			<Row>
				<Link href="/" className={styles.backbtn}>
					{' '}
					<LeftOutlined /> Back to search results{' '}
				</Link>
			</Row>
			<ProductInfo prodcutDetail={prodcutDetail} />
			<hr />
			<Features />
			<hr />
			<ProductIngredients />
			<hr />
			<Credentials />
			<hr />
			<SimilarProducts />
			<hr />
			<Footer />
		</div>
	);
}
