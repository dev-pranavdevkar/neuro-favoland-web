//Ant Design
import { Modal, Row } from 'antd';
import { useState } from 'react';

//Components
import Rating from '@/src/components/Rating';

//Styles
import styles from './styles.module.css';

//Nextjs components
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
export default function ProductInfo(props) {
	const { prodcutDetail } = props;
	const [productImage, setProductImage] = useState();
	// Get session Data
	const { data: session } = useSession();
	const [status, setStatus] = useState(false);
	const [fav, setFav] = useState(false);
	const handelImages = (item) => {
		setProductImage(item);
		setStatus(true);
	};
	// Console.log(session)

	const AddToFav = () => {
		axios
			.post('https://api.favoland.com/register/add-favorite-products', {
				userId: session?.user?.uid,
				productId: prodcutDetail._id,
			})
			.then(() => {
				setFav(true);
			});
	};
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
	};
	return (
		<Row className={styles.row}>
			<div className={styles.ProdcutImageSection}>
				<div className={styles.imageCol}>
					{prodcutDetail?.images?.map((item) => {
						return (
							<Image
								src={item}
								className={styles.productImage}
								onClick={() => handelImages(item)}
								width={90}
								height={90}
								key={item.id}
								alt="Product Image"
							/>
						);
					})}
				</div>
				<div className={styles.productMainImage}>
					<img
						src={status ? productImage : prodcutDetail?.images[0]}
						className={styles.mainImage}
						alt="mainimage"
					/>
				</div>
			</div>
			<div className={styles.productinfo}>
				<h1>{prodcutDetail?.name}</h1>

				<div>
					<span>
						<strong>${prodcutDetail?.price}</strong> onwords
					</span>
				</div>
				<div>
					<span>
						Brand :{' '}
						<strong
							style={{
								textTransform: 'capitalize',
							}}
						>
							{prodcutDetail?.brand}
						</strong>
					</span>
				</div>
				<div>
					<span>
						Type :{' '}
						<strong
							style={{
								textTransform: 'capitalize',
							}}
						>
							{prodcutDetail?.type}
						</strong>
					</span>
				</div>
				<div>
					<span>
						Counrty of Origin :
						<strong
							style={{
								textTransform: 'capitalize',
							}}
						>
							{prodcutDetail?.country}
						</strong>
					</span>
				</div>
				<div>
					<Rating /> <strong>(1122)</strong>
				</div>
				<div className={styles.favorite}>
					{/* <ButtonFilled title="Favorite" onClick={Test()} /> */}
					<button
						disabled={fav}
						onClick={() => (session ? AddToFav() : showModal())}
						style={{
							backgroundColor: 'black',
							color: 'white',
							padding: '10px',
							cursor: 'pointer',
							width: '130px',
							textAlign: 'center',
						}}
					>
						{fav ? 'Added to Favorite' : 'Favorite'}
					</button>
				</div>
				<p className={styles.p}>{prodcutDetail?.description}</p>
				{/* <p className={styles.p}>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi atque
					maxime tempore assumenda ducimus suscipit deleniti accusantium vero a.
					Ullam aperiam ut porro corporis facere, laudantium facilis animi
					possimus, suscipit culpa cumque accusamus, temporibus qui perspiciatis
					fugiat hic voluptatem eaque dolorum iste neque quisquam
				</p> */}
			</div>
			<Modal
				title="Please Login"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={null}
			>
				<p
					style={{
						padding: '10px',
					}}
				>
					Please Login to add this product to your favorite list
				</p>
				<Link href="/signup">
					<p
						style={{
							textAlign: 'center',
							color: 'green',
							fontWeight: 'bold',
							cursor: 'pointer',
							padding: '10px',
							border: '1px solid green',
							borderRadius: '5px',
							width: '100px',
							margin: '0 auto',
							marginTop: '10px',
						}}
					>
						Login Now
					</p>
				</Link>
			</Modal>
		</Row>
	);
}
