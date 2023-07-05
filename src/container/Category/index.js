import { useEffect, useState } from 'react';
//Ant Design
import { Col, Row } from 'antd';
//Components
import ButtonFilled from '@/src/components/Button/ButtonFilled';
import ProductsCard from '@/src/components/Card/ProductsCard';
import Image from 'next/image';
import styles from './styles.module.css';

function CategoryComp(props) {
	const { categoryName } = props;

	const [categoryProdcuts, setCategoryProducts] = useState();

	const specificProdcut = async (categoryName) => {
		await fetch(`/api/category/${categoryName}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then((response) => response.json())
			.then((json) => {
				setCategoryProducts(json);
			});
	};

	useEffect(() => {
		specificProdcut(categoryName);
	}, [categoryName]);
	return (
		<div className={styles.container}>
			<Row>
				<Row
					style={{
						display: 'flex',
						justifyContent: 'center',
						width: '100%',
						marginTop: 10,
					}}
				>
					{categoryProdcuts?.length === 0 && (
						<div
							style={{
								display: 'flex',
								justifyContent: 'center',
								width: '100%',
								alignItems: 'center',
								height: '50vh',
								flexDirection: 'column',
							}}
						>
							<Image
								src="/images/noproductbg.png"
								alt="No Product Found"
								width={350}
								height={250}
							/>
							<h3
								style={{
									fontSize: 18,
									fontWeight: 500,
									marginTop: 10,
									marginBottom: 10,
								}}
							>
								Currently No Product Found in this category
							</h3>
							<p
								style={{
									fontSize: 15,
									margin: 5,
								}}
							>
								Please check back later or try another category
							</p>
							<ButtonFilled title="Home" link="/" />
						</div>
					)}
				</Row>
				{categoryProdcuts?.map((item) => {
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
		</div>
	);
}

export default CategoryComp;
