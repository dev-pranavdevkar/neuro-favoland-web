import ProductsCard from '@/src/components/Card/ProductsCard';
import Navbar from '@/src/container/Navbar';
import { Col } from 'antd';
import axios from 'axios';
import { signOut, useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import styles from '../src/container/Layout/styles.module.css';

const FavouriteProducts = () => {
	const { data: session, status } = useSession();
	const [favProducts, setFavProducts] = useState([]);

	const FavoriteProductIDs = async () => {
		const response = await axios.post(
			`https://api.favoland.com/register/get-favorite-products`,
			{
				userId: session?.user?.uid,
			}
		);
		getFavProducts(response.data.data);
	};

	useEffect(() => {
		FavoriteProductIDs();
	}, [session]);

	const getFavProducts = async (Id) => {
		if (Id !== undefined) {
			const response = await axios.post(
				`https://api.favoland.com/products/favproducts`,
				Id
			);
			setFavProducts(response?.data);
		}
	};

	const removeFavProduct = async (id) => {
		await axios.post(
			`https://api.favoland.com/register/remove-favorite-products`,
			{
				userId: session?.user?.uid,
				productId: id,
			}
		);
		FavoriteProductIDs();
	};

	return (
		<div>
			<div className={styles.container}>
				<Navbar status={status} session={session} signOut={signOut} />

				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
					}}
				>
					{favProducts.statusCode !== 404 ? (
						favProducts?.map((item) => {
							return (
								<Col key={item._id}>
									<ProductsCard
										productId={item._id}
										images={item.images[0]}
										rating={255}
										price={item.price}
										name={item.name}
									/>
									<p
										onClick={() => {
											removeFavProduct(item._id);
										}}
										style={{
											color: 'red',
											fontWeight: 'bold',
											cursor: 'pointer',
										}}
									>
										Remove
									</p>
								</Col>
							);
						})
					) : (
						<p>No products found. Please try again later.</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default FavouriteProducts;
