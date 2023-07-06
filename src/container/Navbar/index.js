import { useState } from 'react';
//Nextjs components
// Import Image from 'next/image';
import Link from 'next/link';

//Ant design
import {  Col, Popover, Row } from 'antd';

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
// Const options = [
// 	{ value: 'option1', label: 'Option 1' },
// 	{ value: 'option2', label: 'Option 2' },
// 	{ value: 'option3', label: 'Option 3' },
// ];

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
			className="flex flex-col space-y-3 w-24"
		
		>
			
			<Link href="/profile">
				<div>
					<p>
						Profile
					</p>
				</div>
			</Link>

			<Link href="/favouriteproducts">
				<div>
					<p>
						Favourite
					</p>
				</div>
			</Link>
			<Link href="#!" onClick={() => {handleOk();}}>
				<div>
					<p>
					Logout
					</p>
				</div>
			</Link>
			{/* <Button 
				onClick={() => {
					handleOk();
				}}>
				Logout
			</Button> */}
		</div>
	);

	return (
		<Row className={styles.header}>
			<Row className={styles.navbar}>
				<Link href="/">
					<img src="/images/logo1.svg" alt="favoland logo" />
				</Link>

				<Col className={styles.actionbtn}>
					{status === 'authenticated' && (
						<Link className="navbar-link pe-2" href={'#!'}r>
							Recommended
						</Link>
					)}
					{status === 'authenticated' && (
						<Link className="navbar-link pe-2" href={'#!'}r>
							Favorites
						</Link>
					)}

					{status === 'authenticated' && (
						<Link className="navbar-link pe-2" href={'#!'}r>
							Wishlist
						</Link>
					)}

					{status === 'authenticated' && (
						<Link className="navbar-link pe-2" href={'#!'}r>
							Deals
						</Link>
					)}

					<Link className="navbar-link pe-2" href={'/about'}>
						About Us
					</Link>
					<Link className="navbar-link pe-2" href={'/team'}>
						Team
					</Link>

					{status === 'authenticated' && (
						<Link className="navbar-link pe-2" href={'#!'}r>
							Notifications
						</Link>
					)}
						{status === 'authenticated' && (
						<Link className="navbar-link pe-2" href={'#!'}r>
							Messages
						</Link>
					)}
							{status === 'authenticated' && (
						<Link className="navbar-link pe-2" href={'#!'}r>
							Settings
						</Link>
					)}
					<Link
						className="navbar-link pe-2"
						href={'https://sellers.favoland.com/'}
					>
						Supplier Sign 
					</Link>
					{status !== 'authenticated' && (
						<Link className="navbar-link pe-2" href={'/signup'}r>
							Sign in
						</Link>
					)}

					{/* <Link className="navbar-link" href={'/signup'}>
<button type="button" class="btn btn-primary scan-product-btn">Scan Product</button>
					</Link> */}
					{/* <ButtonOutline title="Scan product" /> */}

					{status !== 'authenticated' && (
						
							<Link className="navbar-link pe-2" href={'/signup'}>
								<button type="button" class="btn btn-primary signUp-btn">
									Sign Up
								</button>
							
						</Link>
					)}
					<ScanditModal />

					{status === 'authenticated' ? (
						<ButtonFilled title="Logout" link="/signup" onclick={signOut} />
					) : (
						<ButtonFilled title="Sign up" link="/signup" />
					)}
					{/* {status === 'authenticated' && (
						<h3 style={{ marginLeft: 30 }}>{session?.user?.name}</h3>
					)} */}
					{status === 'authenticated' && (
						<Popover content={content} title="" trigger="click">
							<img
								className={styles.profilepicture}
								src={session?.user?.image}
								width={48}
								height={48}
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

			<Row className="">
				<Col className={styles.divider}></Col>
			</Row>
			{searchToaggle && <SearchedProdcuts searchResult={searchResult} />}
		</Row>
	);
}
