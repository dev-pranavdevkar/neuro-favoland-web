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

export default function ProductDes(props) {
	const { productId } = props;
	const [prodcutDetail, setProductDetail] = useState();

	//Fetch Product by id
	const specificProdcut = async (id) => {
		await fetch(`/api/products/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => {
				setProductDetail(json);
			});
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
			<ProductIngredients prodcutDetail={prodcutDetail} />
			<hr />
			<Credentials />
			<hr />
			<SimilarProducts />
			<hr />
			<Footer />
		</div>
	);
}
