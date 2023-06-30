import { fetchAllProducts } from '@/src/redux/slices/productSlices';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//Nextjs Components
import Link from 'next/link';

//Ant Design
import { Col, Row } from 'antd';

//Components
import ProductsCard from '@/src/components/Card/ProductsCard';

//Style
import styles from './styles.module.css';

export default function Products() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchAllProducts());
	}, []);
	const allProducts = useSelector((state) => state.productReducer.allProducts);

	return (
		<>
			<h2>Popular products</h2>
			<Row className="mt-2">
				{allProducts.statusCode !== 404 ? (
					allProducts?.map((item) => {
						return (
							<Col key={item._id}>
								<ProductsCard
									productId={item._id}
									images={item.images[0]}
									rating={255}
									price={item.price}
									name={item.name}
								/>
							</Col>
						);
					})
				) : (
					<p>No products found. Please try again later.</p>
				)}

				<Col span={24} className={styles.viewallContainer}>
					<Link className={styles.viewall} href={'#'}>
						View All
					</Link>
				</Col>
			</Row>
		</>
	);
}
