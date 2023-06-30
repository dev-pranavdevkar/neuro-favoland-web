import { useState } from 'react';
//Nextjs components
import Image from 'next/image';
import Link from 'next/link';

//Ant design
import { Button, Col, Popover, Row } from 'antd';

//Styles
import styles from './styles.module.css';

//Components
import ButtonFilled from '@/src/components/Button/ButtonFilled';
import ScanditModal from '@/src/components/ScanditModal';
import Category from './components/Cagetgory';
//Data
const menu = [
	{ id: 1, label: 'Hair', name: 'hair' },
	{ id: 2, label: 'Face', name: 'face' },
	{ id: 3, label: 'Lips', name: 'lips' },
	{ id: 4, label: 'Nails', name: 'nails' },
	{ id: 5, label: 'Skin', name: 'skin' },
	{ id: 6, label: 'Body', name: 'body' },
	{ id: 7, label: 'Brands', name: 'brands' },
];

import { searchProduct } from '@/src/redux/slices/searchSlice';
import SearchedProdcuts from '../Home/SearchedProduct';

import { useDispatch, useSelector } from 'react-redux';

export default function Navbar(props) {
	const { session, status, signOut } = props;
	const [searchValue, setSearchValue] = useState('');
	const [searchInput, setSearchInput] = useState('');
	const [searchToaggle, setSearchToaggle] = useState(false);

	const searchResult = useSelector(
		(state) => state.searchReducer.searchedProduct
	);

	const dispatch = useDispatch();

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			// 👇 get input value

			setSearchValue(searchInput);
			dispatch(searchProduct(searchValue));
			setSearchToaggle(true);
		}
	};

	const handleOk = () => {
		signOut();
	};

	const content = (
		<div
			className="flex flex-col space-y-1 w-24"
			style={{
				backgroundColor: 'white',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				width: 100,
			}}
		>
			<Link href="/profile">
				<div
					style={{
						paddingBottom: 8,
						backgroundColor: 'white',
						border: 'none',
						borderBottom: '2px solid #000',
						width: '80%',
					}}
				>
					<p
						style={{
							color: 'black',
							fontWeight: 'bold',
							cursor: 'pointer',
						}}
					>
						Profile
					</p>
				</div>
			</Link>

			<Link href="/favouriteproducts">
				<div
					style={{
						paddingTop: 8,
						paddingBottom: 8,
						backgroundColor: 'white',
						border: 'none',
						borderBottom: '2px solid #000',
						width: '80%',
					}}
				>
					<p
						style={{
							fontWeight: 'bold',
							cursor: 'pointer',
							color: 'black',
						}}
					>
						Favourite
					</p>
				</div>
			</Link>
			<Button
				onClick={() => {
					handleOk();
				}}
				style={{
					paddingTop: 5,
					backgroundColor: 'white',
					border: 'none',
					cursor: 'pointer',
					fontWeight: 'bold',
					color: 'red',
				}}
			>
				Logout
			</Button>
		</div>
	);

	return (
		<Row className={styles.header}>
			<Row className={styles.navbar}>
				<Link href="/">
					<Image
						src="/images/logo.svg"
						alt="favoland logo"
						width={200}
						height={100}
					/>
				</Link>

				<Col className={styles.actionbtn}>
					{status !== 'authenticated' && (
						<Link className={styles.signin} href={'/signup'}>
							Sign in
						</Link>
					)}

					{/* <ButtonOutline title="Scan product" /> */}
					<ScanditModal />

					{status === 'authenticated' ? (
						<ButtonFilled title="Logout" link="/signup" onclick={signOut} />
					) : (
						<ButtonFilled title="Sign up" link="/signup" />
					)}
					{status === 'authenticated' && (
						<h3 style={{ marginLeft: 30 }}>{session?.user?.name}</h3>
					)}
					{status === 'authenticated' && (
						<Popover content={content} title="" trigger="click">
							<img
								className={styles.profilepicture}
								src={session?.user?.image}
								width={50}
								height={50}
							/>
						</Popover>
					)}
				</Col>
			</Row>

			<Row className={styles.categoriesSection}>
				<Col className={styles.allCategories}>
					<Category label={'All cagtegories'} />
				</Col>
				<Col className={styles.searchProduct}>
					{/* <Category label={'Search products, brands'} /> */}
					<input
						type="text"
						placeholder="Search for Products, Services "
						className={styles.searchbar}
						onChange={(e) => setSearchInput(e.target.value)}
						onKeyDown={handleKeyDown}
					/>
				</Col>
			</Row>

			<Col>
				<Row className={styles.menu}>
					{menu.map((item) => {
						return (
							<Link
								key={item.id}
								className={styles.link}
								href={`/category/${item.name}`}
							>
								{item.label}
							</Link>
						);
					})}
				</Row>
			</Col>

			<Row>
				<Col className={styles.divider}></Col>
			</Row>
			{searchToaggle && <SearchedProdcuts searchResult={searchResult} />}
		</Row>
	);
}
